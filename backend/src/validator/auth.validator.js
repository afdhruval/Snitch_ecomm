import { body, validationResult } from "express-validator"


function validateUser(req, res, next) {

    const error = validateRegisteruser(req)
    next()

}



export default validateUser


export const validateRegisteruser = [
    body("email")
        .isEmail().withMessage("invalid email format"),
    body("contact")
        .isEmpty().withMessage("contact is required")
        .matches(/^\d{10}$/).withMessage("contact must be a 10 digit"),
    body("password")
        .isLength({ min: 6 }).withMessage("password must be a 6 digit"),
    body("fullname")
        .isEmpty().withMessage("full name is required")
        .isLength({ min: 3 }).withMessage("name must be more than 3"),

    validateUser

]