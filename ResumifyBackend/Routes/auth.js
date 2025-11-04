import express from "express";
import dotenv from "dotenv";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import registerValidation from "../validation/regValidation.js";
import loginValidation from "../validation/loginValidation.js";
import { badRequest, serverError } from "../utils/responses.js";

dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || "7d";

router.post("/register", registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return badRequest(res, errors.array());
  }

  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return badRequest(res, [{ msg: "User already exists", param: "email" }]);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // Save new user
    user = new User({ name, email, password: hashed });
    await user.save();

    // Create JWT payload
    const payload = { user: { id: user.id } };

    jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY }, (err, token) => {
      if (err) throw err;
      res.json({
        success: true,
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    });
  } catch (err) {
    console.error(err);
    return serverError(res);
  }
});

router.post("/login", loginValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return badRequest(res, errors.array());
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return badRequest(res, [{ msg: "Invalid credentials", param: "email" }]);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return badRequest(res, [
        { msg: "Invalid credentials", param: "password" },
      ]);
    }

    const payload = { user: { id: user.id } };

    jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY }, (err, token) => {
      if (err) throw err;
      res.json({
        success: true,
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    });
  } catch (err) {
    console.error(err);
    return serverError(res);
  }
});

export default router;
