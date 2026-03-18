// const express = require('express');
import express, { urlencoded } from 'express'

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')   // "./views" any name of the folder in which ejs file is save
//app.use(urlencoded({ extended: false })) // used to get data from "form"


app.get("/", (req, res) => {
    //res.send("Welcome To Home page of the server")      // res.send() use to send data or content directy to ther webpage
    res.render("Home")
})
app.get("/About", (req, res) => {
    // res.send("Welcome To About page of the server")
    res.render("About", { Title: "About page of the EJS", Name: "Khan Maaz Shakeel", Email: "maazk8448@gmail.com" })
})



app.listen(4000, () => {
    console.log("server is Listening On Port 4000")
})