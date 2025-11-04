import { body } from "express-validator";

const loginValidation = [
  body("email").isEmail().withMessage("Provide a valid email"),
  body("password").exists().withMessage("Password is required"),
];

export default loginValidation;
