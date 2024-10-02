
const express = require("express");
const router = express.Router();
const Score=require("../models/Score");


// router.post("/scoreData",(req,res)=>{
//     try {
//         res.send(global.food_items)
//     } catch (error) {
//         console.error(error.message);
//         res.send("Server Error");
//     }
// })

router.put("/score/:username",async(req,res)=>{
    try{
        let username=req.params.username;
        let scorevalue=Number(req.body.score);
        const sc = await Score.findOne({username : username})
        if(sc.score<scorevalue)
        {
            try 
            {
                const data = await Score.findOneAndUpdate(
                    {username: username },
                    {$set:req.body}
                );
                res.status(200).json(data);
            } 
            catch (error) {
                res.send(error.message)
            }
        }
        else
            res.json("Can't Update")
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false});
    }
})
router.get("/leaderboard",async(req,res)=>{
    const scores = await Score.find();
    res.status(200).json(scores);
})


module.exports=router;