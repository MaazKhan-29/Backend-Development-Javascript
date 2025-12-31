import mongoose, { Schema } from "mongoose";

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

export const User = mongoose.model("User", userSchema)