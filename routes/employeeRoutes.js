const express = require('express');
const router = express.Router();
const employeeModels = require('../models/employeeModels');


// To GET all employees
router.get('/employees', async (req,res)=>{
    let employees = await employeeModels.find();
    return res.json(employees);
});

// To GET a single employee by name
router.get('/employees/:name',async (req,res)=>{
    const Name = req.params.name;
    const employee = await employeeModels.findOne({Name : Name});
    if(employee){
        return res.json(employee);
    }
    else{
        return res.status(404).json({message : "Employee not found"});
    }
});

//To add a new data
router.post('/create',async (req,res)=>{
    const {Name,age,designation,salary} = req.query;

    if(Name  && age && designation &&  salary){
        let employee = await employeeModels.create({
            Name, 
            age, 
            designation, 
            salary
        });
        return res.status(201).json(employee);
    }
    else{
        return res.status(400).json({message : "Employee details are not proper"});
    }
});

//To delete employees
router.delete('/delete/:id', async (req,res)=>{
    const id = req.params.id;
    try{
        const deleted = await employeeModels.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).json({message : "Employee data deleted"});
        }
        else{
            return res.status(404).json({message : "Employee doesn't exist"});
        }
    }
    catch(err){
        return res.status(500).json({error : `Error occured : ${err}`});
    }
});

// TO update employee
router.put('/update/:id', async (req,res)=>{
    const {Name,age,designation,salary} = req.query;
    const id = req.params.id;

    try{
        const updated = await employeeModels.findByIdAndUpdate(
            id,
            {Name, age, designation, salary},
            {new : true}
        );

        if(updated){
            res.status(200).json(updated);
        }
        else{
            res.status(404).json({message : "Employee not found"});
        }
    }
    catch(err){
        return res.status(500).json({error : `Error occured : ${err}`});
    }
    
});

module.exports = router;