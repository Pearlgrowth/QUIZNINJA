import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Styles/Home.css";
import Image from "../../../assets/index";
function Home() {
  return (
    <>
      <div className="container">
        <div className="text">
      <Link to = '/'><p className="phome">QUIZ NINJA</p></Link>
          
        </div>

        <div className="image">
          <img id="home" src={Image} alt="Image Quiz" />
        </div>

        <div id="shome">
          <p id="phome2">
            Get started on your quiz by either signing up if you are new or
            signing in if you have been with us before
          </p>
        </div>
        <div className="buttons">
          <Link to="/signup">
            {" "}
            <button className="button">Sign Up</button>{" "}
          </Link>
          <Link to="/signin">
            {" "}
            <button className="button">Sign In</button>{" "}
          </Link>
        </div>

        <div className="homeDescription">
          <p id="phome3">
            Welcome to my online quiz application <br /> <br />
            This is an application where you can take quizzes under different
            categories when logged in. <br /> <br />
            You can also create your own quiz under any category and it shall be
            reviewed by the admin. <br /> <br />
            There is also a leaderboard and you can sign in and play with your
            friends and compete with them. <br />
            <br />
            Log in and enjoy!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
