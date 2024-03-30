import React, { useState } from "react";
import "./QuizCreate.css";

function QuizCreate() {
  const [questions, setQuestions] = useState([]);

  const handleQuestionChange = (index) => (event) => {
    const newQuestions = [...questions];
    newQuestions[index] = {
      ...newQuestions[index],
      question: event.target.value,
    };
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex) => (event) => {
    const newQuestions = [...questions];
    const newAnswers = [...newQuestions[questionIndex].answers];
    newAnswers[answerIndex] = event.target.value;
    newQuestions[questionIndex] = {
      ...newQuestions[questionIndex],
      answers: newAnswers,
    };
    setQuestions(newQuestions);
  };

  // Function to handle selecting the right answer
  const handleRightAnswerChange = (questionIndex) => (answer) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].rightAnswer = answer;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const quizData = questions.map((question) => ({
      question: question.question,
      answers: question.answers,
      rightAnswer: question.rightAnswer,
    }));
    console.log(quizData);
    try {
      const response = await fetch("http://localhost:3000/createQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
          console.log("Quizzes created successfully");
          setQuestions([]);
        } else {
          console.error("Backend Error:", responseData.message);
        }
      } else {
        console.error("Error creating quizzes:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating quizzes:", error);
    }
  };

  return (
    <div>
      <h1>Create Your Quizzes</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <h2>Question {questionIndex + 1}:</h2>
            <label htmlFor="" className = 'color'>Category</label>
            <input type="text" />
            <label htmlFor={`question${questionIndex}`}  className = 'color'>Question:</label>
            <textarea
              id={`question${questionIndex}`}
              name={`question${questionIndex}`}
              value={question.question || ""}
              onChange={handleQuestionChange(questionIndex)}
              required
              rows="4"
            />
            <br />

            <h2>Options:</h2>
            {question.answers?.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <label htmlFor={`answer${questionIndex}-${answerIndex}`}  className = 'color'>
                  Option {answerIndex + 1}:
                </label>
                <input
                  type="text"
                  value={answer || ""}
                  onChange={handleAnswerChange(questionIndex, answerIndex)}
                  required
                />
                <br />
              </div>
            ))}

            <br />

            {/* Input field for right answer */}
            <label htmlFor={`rightAnswer-${questionIndex}` }  className = 'color'>
              Right Answer:
            </label>
            <input
              type="text"
              id={`rightAnswer-${questionIndex}`}
              name={`rightAnswer-${questionIndex}`}
              value={question.rightAnswer || ""}
              onChange={(e) =>
                handleRightAnswerChange(questionIndex)(e.target.value)
              }
              required
            />

            <br />
          </div>
        ))}

        {questions.length < 10 && (
          <button
            type="button"
            onClick={() => {
              setQuestions([
                ...questions,
                { question: "", answers: ["", "", "", ""], rightAnswer: "" },
              ]);
            }}
          >
            Add New Question
          </button>
        )}
        <br />
        <button type="submit" disabled={questions.length === 0}>
          Submit All Quizzes
        </button>
        alert('Questions added successfully to the database')
      </form>
    </div>
  );
}

export default QuizCreate;
