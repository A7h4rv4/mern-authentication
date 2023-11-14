import User from "../models/user.model.js";
import bcrypyjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypyjs.hash(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully " });
    console.log("user created successfully");
  } catch (error) {
    next(error);
  }
};
