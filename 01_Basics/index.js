const express = require('express')
const App=express()
const Port=3000


App.get('/',(req,res)=>{
    res.send("Welcome to the Express Server Home")
})
App.get('/Home',(req,res)=>{
    res.send("WelCome to the Home Of my Website")
})
App.get('/About',(req,res)=>{
    res.send("My Self Maaz Khan")
})


App.listen(Port,()=>{
    console.log(`Express Server Listening port: ${Port}`)
})