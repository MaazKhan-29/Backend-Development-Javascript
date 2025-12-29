import mongoose from "mongoose";

const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    AddressLine1:{
        type:String,
        required:true
    },
    AddressLine2:{
        type:String,
    },
    pincode:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Hospital=mongoose.model("Hospital",hospitalSchema)