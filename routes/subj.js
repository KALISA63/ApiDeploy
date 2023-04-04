const express= require('express');
const router=express.Router();
const Subject=require("../models/Subjects")
const User=require('../models/User')
const Department = require('../models/Department.js');


// REGISTER Subject

router.post('/register', async (req, res)=>{
    const newSubject = new Subject(req.body);
    try {
        const savedSubject  = await newSubject.save();
        return res.status(200).json(savedSubject);
        
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }        

        })

        //UPDAT Subject


        router.patch("/editById/:id", async (req,res)=>{
            try{
                const subject=await Subject.findById(req.params.id);
                if (req.body.subjectId === req.params.id) {
                try{
                    const updatedSubject=await Subject.findByIdAndUpdate(req.params.id,{
                        $set:req.body
                    },{new:true});
                    return res.status(200).json(updatedSubject)
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


//GET Subject

router.get('/findById/:id',async(req,res)=>{
    try{
        const subject= await Subject.findById(req.params.id)
        if(!subject){
            return res.status(401).json("Subject not found");
        }else{
            return res.status(200).json(subject)
        }
    }catch(err){
        return res.status(500).json(err);
    }
});

//GET ALL SubjectS


router.get("/getAll",async(req, res)=>
{
    const username=req.query.user;
    const catName=req.query.cat;
    try{
        let subjects;
        if(username){
            subject=await Subject.find({username})
        }else if(catName){
            subject=await Subject.find({categories:{
                $in:[catName]
            }})
        }else{subjects=await Subject.find()
        }
        res.status(200).json(subjects);
    }catch(err){
        res.status(500).json("you are not admin")
    }
})
  

module.exports=router