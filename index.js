const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const connectdb = require('./db/connect');
require('dotenv').config();

const app = express();
const PORT = process.env.port;

app.use(express.json());

app.use('/', employeeRoutes);

app.get('/',(req,res)=>{
    return res.status(404).send("Welcome Admin !");
});


app.listen(PORT , ()=>{
    connectdb();
    console.log(`Server is running on port ${PORT}`);
});