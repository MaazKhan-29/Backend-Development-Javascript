// const dotenv = require('dotenv')
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';
dotenv.config({path:'./env'})

connectDB()
.then(


    app.listen(process.env.PORT||8000,()=>{
        console.log(`App is listening on PORT:${process.env.PORT}`)
    })

)
.catch((error)=>{
    console.log(error);
    
})












































/*
import express from "express";
const app=express()

(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log(error)
        })


        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error);
        
    }
})()
*/