const mongoose = require('mongoose');

const employeeScheme = mongoose.Schema({
    Name : String,
    age : Number,
    designation : String,
    salary : Number
});

module.exports = mongoose.model("employee",employeeScheme);