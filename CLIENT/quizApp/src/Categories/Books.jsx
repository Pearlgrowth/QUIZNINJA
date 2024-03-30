import React, { useState, useEffect } from "react";
import './styles/General.css'
const Books = () => {
  const [data, setData] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const api =
       'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple';
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData(); // Call getData only once on component mount
  }, []);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const checkAnswers = () => {
    let userScore = 0;
    data.results.forEach(question => {
      const userAnswer = selectedAnswers[question.question]; // Get user's answer for this question
      if (userAnswer && userAnswer === question.correct_answer) {
        userScore++;
      }
    });
    setScore(userScore);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
  };
  const home= ()=>{
    window.location.href='/startquiz'
  }
  return (
    <>
    
      <div className="questionnaire">
        <h1>TEST YOUR KNOWLEDGE ON BOOKS!</h1>
        {data && data.results ? (
          data.results.map((question) => (
            <div key={question.question} className="question-container">
              {/* Question title */}
              <h4>{question.question}</h4>
              {/* Answer options list */}
              <ul className="answer-list">
                {question.incorrect_answers.map((answer) => (
                  <li key={answer}>
                    <input
                      type="radio"
                      id={answer}
                      name={question.question} // Use same name for radio buttons in a question
                      value={answer}
                      onChange={(e) => handleAnswerSelect(question.question, e.target.value)}
                      checked={selectedAnswers[question.question] === answer} // Set checked based on selected answer
                    />
                    <label htmlFor={answer}>{answer}</label>
                  </li>
                ))}
                <li key={question.correct_answer}>
                  <input
                    type="radio"
                    id={question.correct_answer}
                    name={question.question} // Use same name for radio buttons in a question
                    value={question.correct_answer}
                    onChange={(e) => handleAnswerSelect(question.question, e.target.value)}
                    checked={selectedAnswers[question.question] === question.correct_answer} // Set checked based on selected answer
                  />
                  <label htmlFor={question.correct_answer}>
                    {/* Correct Answer: */} {question.correct_answer}
                  </label>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )} <br /> <br /> <p>Click the Check Answers button for the results and scroll below for your results👌</p>
        <div className="button-container">
          <button onClick={checkAnswers}>Check Answers</button> 
          <button onClick={resetQuiz} disabled={score > 0}>
            Reset Quiz
          </button>
          <button onClick = {home}>Back</button>
        </div>
        {score > 0 && ( // Only show result if score is set
          <div className="result-container">
            <h2>Your Score: {score} out of {data.results.length}</h2>
            {score === data.results.length && <p>Congratulations! You got all the answers correct!</p>}
            {score < data.results.length && (
              <ul>
                <p className="results">
                {data.results.map((question) => (
                  <li key={question.question}>
                    {question.question} -{" "}
                    {selectedAnswers[question.question] === question.correct_answer ? (
                      <span className="correct">Correct</span>
                    ) : (
                      <span className="incorrect">
                        Incorrect (Correct Answer: {question.correct_answer})
                      </span>
                    )}
                  </li>
                ))}
                </p>
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Books;