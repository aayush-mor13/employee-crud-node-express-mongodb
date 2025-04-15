const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.mongodb_url;

const connectdb = () =>{
    console.log("Successfully connected to Database !");
    return mongoose.connect(uri);
}

module.exports = connectdb;