const express = require("express")
const cors=require('cors')
const app=express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const authRoute = require("./Routes/auth")
const scoreRoute = require("./Routes/scores")

dotenv.config();
// mongoose.connect('mongodb://localhost:27017/typing',{useNewUrlParser:true});
mongoose.connect(process.env.MONGO_URL);
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth",authRoute);
app.use("/api/scores",scoreRoute);

app.listen(5000,()=>{
    console.log("app is listening on port 5000");
});
