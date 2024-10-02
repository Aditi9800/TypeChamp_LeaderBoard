const express = require("express");
const router = express.Router();
const User = require("../models/User")
const Score=require("../models/Score");
const bcrypt=require("bcryptjs");
// const jwt=require("jsonwebtoken");
// const jwtSecert="Mynameiswebdeveloperandprogrammer##";

router.post("/signup",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const secPassword=await bcrypt.hash(req.body.password,salt);
        const newUser =  new User({
            name:req.body.name,
            email:req.body.email,
            password:secPassword
        })

        const score = new Score({
            username:req.body.name,
            score:0
        })

        const user = await newUser.save();
        await score.save();

        res.status(200).json(user);
    //     const docs=await User.find({});
    // console.log(docs);
    }
    catch(err){
        res.status(404).json(err);
    }
})

router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("user not found");
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("Wrong password");
        res.status(200).json(user)
    }catch(err){
        console.log(err);
    }
})



module.exports=router;