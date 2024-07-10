
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const urlRoutes = require('./routes/url');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/urls', urlRoutes);

// Connect to MongoDB
mongoose
.connect(process.env.MONGODB)
.then(()=>{
 console.log("connected to MongoDB");
 app.listen(process.env.PORT, () => {
   console.log(`Server is running on port ${process.env.PORT}`);
 });
})
.catch((error) =>{
console.log("conection error",error.message)
});