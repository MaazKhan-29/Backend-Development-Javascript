import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'     // stand for Cross Origin Resourse Sharing, that can be used to connect frontend and backend, when their origin is different

const app=express()

// this ".use()" method is used to set configuration or Middleware
app.use(cors({
    origin:process.env.CORS_ORIGIN
})) 

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}