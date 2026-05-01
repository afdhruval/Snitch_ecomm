import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { config } from "../config/config.js";

async function sendTokenResponse(user, res) {

    const token = jwt.sign({
        id: user._id
    }, config.JWT_SECRET)
}

export const register = async (req, res) => {

    const { email, contact, password, fullname } = req.body

    try {
        const isUserExits = await userModel.findOne({
            $or: [
                { email },
                { contact }
            ]
        })

        if (isUserExits) {
            return res.status(409).json({
                message: "user already exitss"
            })
        }

        const user = await userModel.create({
            email, password, contact, fullname
        })




    } catch (err) {
        throw Error("server error")
    }


}

export default {
    register
}