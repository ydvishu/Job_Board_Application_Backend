import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    stipend:{
        type: String,
        required: true
    },
    domain:{
        type: String,
        required: true
    },
    site:{
        type: String,
        required: true
    }
},{timestamps: true})

export const Job = mongoose.model('Job', jobSchema )