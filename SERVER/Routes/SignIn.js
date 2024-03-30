import { Router } from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import connection from '../connection.js';

const SignInRouter = Router()

const comparePasswords = async (plainTextPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

const SignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Missing email or password');
  }

  try {
    const query = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await connection.promise().query(query, [email]);

    // Check if user exists
    if (rows.length === 0) {
      return res.status(401).send('Invalid username or password'); // User not found
    }

    const user = rows[0];

    // Compare hashed passwords
    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Invalid username or password');
    }
    res.status(200).send('Login successful');

  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).send('Internal server error');
  }
};

SignInRouter.post('/signIn', SignIn);

export default SignInRouter;