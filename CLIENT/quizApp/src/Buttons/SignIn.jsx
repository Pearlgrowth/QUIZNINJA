import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    const userData = {
      email: email,
      password: password,
    };

    // Send a POST request to your backend endpoint with user data
    try {
      const response = await fetch("http://localhost:3000/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Signin successful!");
        setEmail("");
        setPassword("");
        window.location.href = "/startquiz";
      } else {
        alert("Signin failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <>
      <body >
        <div className="container3">
          <div className="signIn">
            <h2>Sign In</h2>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="footer2">
            <button onClick={handleSignIn}> <b>Sign In</b></button>
          </div>
        </div>
      </body>
    </>
  );
}

export default SignIn;
