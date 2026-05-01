import express from "express"
import { Router } from "express";
import authController from "../controller/auth.controller.js";
import validateUser from "../validator/auth.validator.js"

const authRouter = express.Router()


authRouter.post("/register", authController.register)


export default authRouter