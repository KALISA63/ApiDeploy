const express=require('express');
const router=express.Router();
const User=require('../models/User.js');
const Department = require('../models/Department.js');
const Subject=require("../models/Subjects.js")




router.post('/register', async (req, res)=>{
    const newDepartment = new Department(req.body);
    try {
        const savedDepartment  = await newDepartment.save();
        return res.status(200).json(savedDepartment);
        
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }        

        })

        //UPDAT DEPARTMENT


        router.patch("/editById/:id", async (req,res)=>{
            try{
                const department=await Department.findById(req.params.id);
                if (req.body.departId === req.params.id) {
                try{
                    const updatedDepartment=await Department.findByIdAndUpdate(req.params.id,{
                        $set:req.body
                    },{new:true});
                    return res.status(200).json(updatedDepartment)
                }catch(err){
                    return res.status(500).json(err);        
                }
                } else{
                    return res.status(404).json("you can't uptade this account!!!")
                }
            }catch(err){
                return res.status(500).json(err);
            }
        });


//GET DEPARTMENT

router.get('/findById/:id',async(req,res)=>{
    try{
        const department= await Department.findById(req.params.id)
        if(!department){
            return res.status(401).json("Department not found");
        }else{
            return res.status(200).json(department)
        }
    }catch(err){
        return res.status(500).json(err);
    }
});

//GET ALL DEPARTMENTS


router.get("/getAll", async (req, res) => {
    try {
      const department = await Department.find();
      return res.status(200).json({department});
    } catch (err) {
      return res.status(500).json("you are not admin");
    }
  });

module.exports=router