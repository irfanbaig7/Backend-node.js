// require('dotenv').config()

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => { // server start form here
    console.log(` Server is Runing at Port : ${process.env.PORT}`);
    
  })
})
.catch((error) => {
  console.log("Mongo DB Connection faild", error)
})


/* 
import express from "express";
const app = express()

( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
       app.on("Error", (error) => {
        console.log("Not able to talk to Give Error", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       }) 

    } catch (error) {
        console.log("Error: ", error);
        throw error
    }
})()
*/
