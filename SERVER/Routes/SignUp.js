import { Router } from "express";
import bcrypt from "bcrypt";
import connection from "../connection.js";

const SignUpRouter = Router();


const SignUp = async (req, res) => {
  
  try {
    const { username} = await req.body;
    const{password}= await req.body
    const{email}= await req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hash(password, salt);
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    connection.query(query, [username, email, hashedPassword], (queryError) => {
      if (queryError) {
        console.error("Error signing up:", queryError);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.status(201).json({ message: "User signed up successfully" });
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

SignUpRouter.post("/signUp", SignUp);

export default SignUpRouter;
