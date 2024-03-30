import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    console.log(userData)

    // Send a POST request to your backend endpoint with user data
    try {
      const response = await fetch("http://localhost:3000/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Signup successful!");
        setUsername("");
        setEmail("");
        setPassword("");
        window.location.href= '/signin'
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container2">
      <div className="signUp">
        <h2>Sign Up</h2>
        <label htmlFor="username">Username</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} required
        />
        <label htmlFor="email">Email Address</label><br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />
        <div id="member">
        <p>
          Already a member? <br /><br />< a href="/signin">Log In</a> 
          </p>
     
          
        
        </div>
      </div>
      <div className="footer"><br /><br />
         <br />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
