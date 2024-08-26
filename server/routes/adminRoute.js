const express = require('express');
const router = express.Router();
const authMiddlware = require('../Middlewares/authMiddlware');
const User = require('../models/userModel')
const Foot = require('../models/footModel')

router.get("/get-all-users",authMiddlware,async(req,res)=>{
    try{
       const {footId,status,userId}=req.body;
       const foot = await Foot.findByIdAndUpdate(footId,{
        status,
       })
       const user = await User.findOne({_id:userId});
       const unseenNotifications= user.unseenNotifications;
       unseenNotifications.push({
        type:"new-request-changed",
        message:`Your foot account has been ${status}`,
        onclickPath:"/notification",
       });
       await User.findByIdAndUpdate(user._id,{unseenNotifications});
       res.status(200).send({
        message:"Foot status uptade succesful",
        success:true,
        data:foot,
       });
    }catch(error){
        console.log(error);
        res.status(500).send({
            message:"Error fetched ",
            success:false,
            error
        })
    }
})

router.post('/change-reservation-status', authMiddlware, async (req, res) => {
    try {
        const { footId, status } = req.body;

        // Vérifiez si footId et status sont présents dans la requête
        if (!footId || !status) {
            return res.status(400).send({ message: "L'identifiant du pied et le statut sont requis." });
        }

        // Vérifiez si le statut est valide
        if (status !== 'pending' && status !== 'approved') {
            return res.status(400).send({ message: "Le statut de la réservation doit être 'pending' ou 'approved'." });
        }

        // Mettez à jour le statut de la réservation dans la base de données
        const updatedFoot = await Foot.findByIdAndUpdate(footId, { status }, { new: true });

        if (!updatedFoot) {
            return res.status(404).send({ message: "Pied non trouvé." });
        }

        res.status(200).send({ message: "Statut de la réservation mis à jour avec succès.", success: true, data: updatedFoot });
    } catch (error) {
        console.error("Erreur lors de la mise à jour du statut de la réservation :", error);
        res.status(500).send({ message: "Erreur lors de la mise à jour du statut de la réservation.", success: false, error });
    }
});