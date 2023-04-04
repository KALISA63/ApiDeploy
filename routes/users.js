const express = require("express");
const User = require("../models/User.js");
const Department = require("../models/Department.js");
const Subject=require("../models/Subjects")

const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary=require('../cap/cloudinary.js')
const JWT=require ('jsonwebtoken')



// picture upload

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./routes/images")
  },filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
});

const upload=multer({storage:storage});
router.post('/upload', upload.single("image"),(req,res)=>{
  res.status(200).json("File uploaded");
})


//Register

router.post('/register',async(req,res)=>{
  try {
      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(req.body.password,salt);
      const user=new User(req.body)
      const userExist=await User.findOne({email:req.body.email});
      //const accessToken=sign.sign({_id:user.id,role:user.role})
      if(userExist){
          return res.status(404).json({message:"Email exists, just try an other different email!!"})
      }
      user.password=hashedPassword;
      await user.save();
      return res.status(200).json(user)
  } catch (error) {
      return res.status(500).json({message:"Internal Server error", data:error})
  }
})


//Login

router.post("/login",async(req,res)=>
    {
        try{
            const user=await User.findOne({email:req.body.email});
            !user&&res.status(400).json("wrong user!");
            const validated=await bcrypt.compare(req.body.password, user.password)
            !validated&&res.status(400).json("wrong Password");
            const {password, ...others}=user._doc;
            res.status(200).json(others)
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    });

//user update

router.patch("/updateById/:id", async (req, res) => {
  try {
      console.log("testing");
    if (req.body.userId !== req.params.id) {
      return res.status(400).json("you are not allowed to update this a/c");
    }
    const user = await User.findById(req.params.id);
    const comparePsw = await bcrypt.compare(req.body.password, user.password);
    if (!comparePsw) {
      return res.status(400).json("wrong password");
    }
    const UpdadedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        email:req.body.email,
      },
      { new: true }
    );
    return res.status(200).json(UpdadedUser);
  } catch (err) {
    console.log(err, "xfgchvjbknlm");
    return res.send(500).json(err);
  }
});



//GET

router.get("/findById/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json("Sorry!, User does not exist.");
    }
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});



//GET All

router.get("/getAll", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json({user});
  } catch (err) {
    return res.status(500).json("you are not Admin");
  }
});


module.exports = router;
