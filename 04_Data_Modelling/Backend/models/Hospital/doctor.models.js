import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        string: string,
        required: true
    },
    qualification: {
        type: string,
        required: true
    },
    experienceInYear: {
        type: Number,
        required: true
    },
    worksInHospital: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }],
    specializedIn:[{
        type:String
    }]
}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema)