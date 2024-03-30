import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import SignUp from "./Routes/SignUp.js";
import SignIn from "./Routes/SignIn.js";
import Quizzes from "./Routes/Quizzes.js";
import connection from "./connection.js";

dotenv.config();

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Server Connected to MySQL database");
});

const app = express();

//cors middleware
const whitelist = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(SignUp);
app.use(SignIn);
app.use(Quizzes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
