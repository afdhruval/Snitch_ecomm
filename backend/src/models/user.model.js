import mongoose from "mongoose";

const useSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullname : {
        type: String,
        required: true,
    },
    role: {}


})