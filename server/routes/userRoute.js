const express = require('express')
const router = express.Router()

const User = require('../models/userModel')
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')
const autMiddelware = require('../Middlewares/authMiddlware')

const Foot = require('../models/footModel');
const {generateReservationPDF,sendConfirmationEmail} = require('./nodemailer')
const Message = require('../models/messageModel')
const moment = require('moment'); // Add this line to import moment




// routes/authRoutes.js

router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        const nameExists = await User.findOne({ name: req.body.name });
        const telExists = await User.findOne({ Tel: req.body.tel });

        if (userExists) {
            if (userExists.isBlocked) {
                return res.status(403).send({ message: "Votre compte a été bloqué", success: false });
            }
            return res.status(200).send({ message: "Votre email existe déjà", success: false });
        }

        if (nameExists) {
            return res.status(200).send({ message: "Ce nom est déjà pris", success: false });
        }

        if (telExists) {
            return res.status(200).send({ message: "Ce numéro de téléphone est déjà pris", success: false });
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).send({ message: "Votre compte a été créé avec succès", success: true });
    } catch (error) {
        res.status(500).send({ message: "Quelque chose ne fonctionne pas", success: false, error });
    }
});




router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).send({ message: "L'utilisateur n'existe pas", success: false });
        }
        if (user.isBlocked) {
            return res.status(403).send({ message: "Votre compte a été bloqué", success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(200).send({ message: "Le mot de passe ne fonctionne pas", success: false });
        } else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });
            res.status(200).send({ message: "Connexion réussie", success: true, data: token });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Erreur de connexion", success: false, error });
    }
});


router.post('/get-user-info-by-id',autMiddelware,async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.body.userId});
        user.password = undefined
        if(!user){
            return res.status(200).send({message:"User does not exists",success:false})
        }else{
            res.status(200).send({
                success:true,
                data:user,
            });
        }
    }catch(error){
        res.status(500).send({message:"Error getting user info",success:false,error})
    }
})


const formatTimings = (timings) => {
    return timings.map(timing => new Date(timing).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false }));
};

router.post('/reservation', async (req, res) => {
    try {
        const { name, email, phoneNumber, address, timings, userId } = req.body;

        // Validate required fields
        if (!name || !email || !phoneNumber || !address || !userId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validate timings
        if (!Array.isArray(timings) || timings.length !== 2) {
            return res.status(400).json({ message: "Invalid timings format" });
        }

        // Ensure timings are in the correct format and within valid range
        const start = moment(timings[0], 'HH:mm');
        const end = moment(timings[1], 'HH:mm');
        const duration = moment.duration(end.diff(start)).asHours();

        if (duration !== 1 || !start.isValid() || !end.isValid()) {
            return res.status(400).json({ message: "Timings must be a valid 1-hour range within operating hours" });
        }

        // Check for overlapping reservations
        const overlappingReservation = await Foot.findOne({
            timings: {
                $elemMatch: {
                    $gte: timings[0],
                    $lt: timings[1],
                },
            },
        });

        if (overlappingReservation) {
            return res.status(400).json({ message: "Time slot is already booked" });
        }

        // Create new reservation
        const newFoot = new Foot({
            userId,
            Name: name,
            email,
            phoneNumber,
            address,
            timings,
            description: "Default description",
        });

        await newFoot.save();

        // Generate PDF
        const filename = `reservation_${newFoot._id}`;
        generateReservationPDF(req.body, filename);

        // Send confirmation email with PDF attached
        sendConfirmationEmail(email, filename);

        // Add notification to user
        const user = await User.findById(userId);
        user.unseenNotifications.push({
            type: "new_reservation",
            message: `New reservation by ${name} from ${timings[0]} to ${timings[1]}`,
            data: newFoot,
            onClickPath: `/reservation/${newFoot._id}`,
        });

        await user.save();

        res.status(200).json({ message: "Reservation successful", success: true });
    } catch (error) {
        console.error("Error while processing reservation:", error);
        res.status(500).json({ message: "Error during reservation", success: false, error });
    }
});








router.post('/delete-all-notifications', autMiddelware, async (req, res) => {
    try {
        const user = await User.findOne({_id:req.body.userId})
        user.seenNotifications = [];
        user.unseenNotifications = [];
        const updateUser = await user.save();
        updateUser.password = undefined
        res.status(200).send({success:true,message:"Toutes les notifications ont été supprimer",data:updateUser})
    } catch (error) {
      res.status(500).send({ message: "Erreur lors de l'application du terrain", success: false, error });
    }
  });
  
  router.post('/delete-all-foot-records', autMiddelware, async (req, res) => {
    try {
        await Foot.deleteMany({ userId: req.body.userId });
        res.status(200).send({ success: true, message: "Toutes les réservations ont été supprimées" });
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la suppression des réservations", success: false, error });
    }
});



router.get('/reservations', autMiddelware, async (req, res) => {
    try {
        const reservations = await Foot.find();
        res.status(200).send({ success: true, data: reservations });
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la récupération des réservations", success: false, error });
    }
});





router.delete('/delete-all-reservations', autMiddelware, async (req, res) => {
    try {
        await Foot.deleteMany({});
        res.status(200).send({ success: true, message: "Toutes les réservations ont été supprimées" });
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la suppression des réservations", success: false, error });
    }
});
router.put('/deletes-all-reservations', autMiddelware, async (req, res) => {
    try {
        await Foot.updateMany({ userId: req.body.userId }, { $set: { deleted: true } });
        res.status(200).send({ success: true, message: "Toutes les réservations ont été marquées comme supprimées" });
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la suppression des réservations", success: false, error });
    }
});








  router.get('/get-all-users',autMiddelware,async(req,res)=>{
    try{
        const Foot = await User.find({});
        res.status(200).send({message:"User fetched successfuly",success:true,data:Foot
    });
    }catch(error){
        res.status(500).send({message:"Eror appliying doctor accont",success:false,error});
    }
}); 




router.delete('/delete-user/:userId', autMiddelware, async (req, res) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndUpdate(userId, { isBlocked: true });
        res.status(200).send({ success: true, message: "Utilisateur bloqué avec succès" });
    } catch (error) {
        res.status(500).send({ message: "Erreur lors du blocage de l'utilisateur", success: false, error });
    }
});

router.post('/submit-message', async (req, res) => {
    try {
        const { name, email, phone, datetime, message } = req.body;
        const newMessage = new Message({ name, email, phone, datetime, message });
        await newMessage.save();
        res.status(200).send({ message: "Message submitted successfully", success: true });
    } catch (error) {
        res.status(500).send({ message: "Failed to submit message", success: false, error });
    }
});


router.get('/messages', async (req, res) => {
    try {
      const messages = await Message.find();
      res.status(200).send({ success: true, data: messages });
    } catch (error) {
      res.status(500).send({ success: false, message: "Failed to fetch messages", error });
    }
  });


  router.get('/user-count', async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.status(200).send({ success: true, count: userCount });
    } catch (error) {
        res.status(500).send({ success: false, message: "Failed to fetch user count", error });
    }
});

router.get('/reservation-count', async (req, res) => {
    try {
        const reservationCount = await Foot.countDocuments();
        res.status(200).send({ success: true, count: reservationCount });
    } catch (error) {
        res.status(500).send({ success: false, message: "Failed to fetch reservation count", error });
    }
});

router.get('/message-count', async (req, res) => {
    try {
        const messageCount = await Message.countDocuments();
        res.status(200).send({ success: true, count: messageCount });
    } catch (error) {
        res.status(500).send({ success: false, message: "Failed to fetch message count", error });
    }
});

router.delete('/supprimer-all-messages', autMiddelware, async (req, res) => {
    try {
        await Message.deleteMany({});
        res.status(200).send({ success: true, message: "Tous les messages ont été supprimés" });
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la suppression des messages", success: false, error });
    }
});

module.exports = router