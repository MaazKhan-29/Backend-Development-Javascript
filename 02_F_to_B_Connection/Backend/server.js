// import e from 'express'
import express from 'express'

const App=express()
const port=process.env.PORT || 3000;

const jokes=[
    {
        id:1,
        title:"A Joke",
        content:"This is a Joke"
    },
    {
        id:2,
        title:"Another Joke",
        content:"This is Another Joke"
    },
    {
        id:3,
        title:"Third Joke",
        content:"This is Third Joke"
    },
    {
        id:4,
        title:"Fourth Joke",
        content:"This is Fourth Joke"
    },
    {
        id:5,
        title:"Fifth Joke",
        content:"This is Fifth Joke"
    }
]

App.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})

App.listen(port,(req,res)=>{
    console.log(`Listening on port:${port}`)
})