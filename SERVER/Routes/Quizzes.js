import { Router } from "express";
import connection from "../connection.js";

const QuizRouter = Router();

const Quizzes = async (req, res) => {
  const data = req.body;
  try {
    data.forEach((quiz) => {
      const { question, answers, rightAnswer } = quiz;
      const joinedAnswers = answers.join(",");
      const query =
        "INSERT INTO quizzes(question,answers, rightAnswer) VALUES(?,?,?)";
      connection.query(
        query,
        [question, joinedAnswers, rightAnswer],
        (err, result) => {
          if (err) {
            throw err;
          }
        }
      );
    });

    console.log("Quiz saved successfully");
    res.status(201).json({ success: "Quiz created successfully" });
  } catch (error) {
    console.error("Error saving quiz", err);
    res.status(500).json({ Error: "Intenal server error" });
  }
};

QuizRouter.post("/createQuiz", Quizzes);

export default QuizRouter;
