import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuizSearch({ quizzes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const results = quizzes.filter((quiz) =>
      quiz.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search quiz"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((quiz, index) => (
          <li key={index}>
            <Link to={`/${quiz}`}>
              {quiz} - {quiz.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizSearch;
