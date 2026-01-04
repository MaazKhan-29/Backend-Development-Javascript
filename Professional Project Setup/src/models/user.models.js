import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
// import jsonwebtoken  from "jsonwebtoken";
// const jwt=jsonwebtoken
import jwt from 'jsonwebtoken'
// import jsonWebToken from 'jsonwebtoken'


const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullname:{
            type:String,
            required:true,
            trim:true
        },
        avatar:{
            type:String,
            required:true
        },
        coverImage:{
            type:String  //cloudinary URL
        },
        watchHistory:[{
            type:Schema.Types.ObjectId,
            ref:"Video"
        }],
        password:{
            type:String,
            required:[true,'password is required']
        },
        refreshToken:{
            type:String
        }


    },
    { timestamps: true })


    // It is a middleware that perform password hashing before stored into the database or final destination
    
    userSchema.pre("save", async function(next){
        if(!this.isModified("password")) return ;
        this.password = await bcrypt.hash(this.password,10);
        // next()
    });

    userSchema.methods.isPasswordCorrect=async function(password){
        return await bcrypt.compare(password,this.password)
    }

    userSchema.methods.generateAccessToken=function (){
        return jwt.sign({
            _id:this._id,
            username:this.username,
            email:this.email,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET
        ,{
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        })
    }


    userSchema.methods.generateRefreshToken=function(){
        return jwt.sign(
            {
                _id:this._id
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }




export const User = mongoose.model("User", userSchema)