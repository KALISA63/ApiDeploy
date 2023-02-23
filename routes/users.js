const express = require("express");
const User = require("../models/User.js");
const Post = require("../models/Post.js");
const router = express.Router();
const bcrypt = require("bcrypt");



//Register

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});



//Login

router.post("/login", async (req, res) => {
  try {
    let condition = "";
    if (req.body.value.includes("@")) {
      condition = { email: req.body.value };
    } else {
      condition = { username: req.body.value };
    }

    // if(req.body.username){
    //     condition={username: req.body.username }
    // }
    // if(req.body.email){
    //     condition={email: req.body.email}
    // }
    const user = await User.findOne(condition);
    !user && res.status(404).json("user doesn't exist");
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("wrong Passs!");
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});




//Updating password

// router.put('/:id',async(req,res)=>{
//     if(req.body.userId===req.params.id)
//     if(req.body.email){
//         try{
//             const UpdadedPassword=await User.findByIdAndUpdate(
//                 req.params.id,
//                 {$set:{password: req.body.password},
//                 },
//                 {new:true}
//             )
//             return res.status(200).json(UpdadedPassword)
//         }catch(err){
//             return res.status(500).status(err)
//         }
//     }
// })
//user update

// router.put('/:id',async(req,res)=>{
//     try{
//     if(req.body.userId===req.params.id){
//         console.log('testing');
//     if(req.body.password){
//         return res.status(404).json('no password provided')
//         try{
//             const UpdadedUser=await User.findByIdAndUpdate(
//                 req.params.id,{
//                     $set:req.body,
//                 },
//                 {new:true,}
//             )
//             return res.status(200).json(UpdadedUser);
//         }catch(err){
//             console.log(err);
//             return res.status(500).json(err)
//         }
//     }else{
//         return res.status(401).json("you can't update this password");
//     }
//     }}catch(err){
//         return res.status(500).json("check your codes");
//     }
// })

router.patch("/updateById/:id", async (req, res) => {
  try {
      console.log("testing");
    if (req.body.userId !== req.params.id) {
      return res.status(400).json("you can 't update this a/c");
    }
    const user = await User.findById(req.params.id);
    const comparePsw = await bcrypt.compare(req.body.password, user.password);
    if (!comparePsw) {
      return res.status(400).json("wrong password");
    }
    //   const salt = await bcrypt.genSalt(10);
    // req.body.password = await bcrypt.hash(req.body.password, salt);
    //   try {
    const UpdadedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        username: req.body.username,
        email:req.body.email,
      },
      { new: true }
    );
    return res.status(200).json(UpdadedUser);
    //   } catch (err) {
    //     // console.log(err,'dfxgchvjbk');
    //     return res.status(500).json(err);
    //   }
    //   return res.status(404).json("No password provided");
    // } else {
    //   return res.status(401).json("you can 't update this a/c");
    // }
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



//Delete

router.delete("/eraseById/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json("User does not exist!");
    }
    if (req.body.userId === req.params.id) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("user deleted");
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json("you are not allowed to delete this user");
    }
  } catch (err) {
    return res.status(404).json("User not found");
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
