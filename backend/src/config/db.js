import mongoose from "mongoose";
import { config } from "./config.js";

export const mongoConnect = async () => {
    await mongoose.connect(config.MONGO_URI)
        .then(() => {
            console.log("connected to database");
        })
}

