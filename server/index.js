const express = require('express');
const cors = require('cors');
const passport = require('passport');
const app = express();

require('dotenv').config();
require('./config/dbConfig');
require('./config/passport');

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute'); 

app.use('/api/user', userRoute);
app.use('/api/admin', userRoute);
app.use('/auth', authRoute); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});