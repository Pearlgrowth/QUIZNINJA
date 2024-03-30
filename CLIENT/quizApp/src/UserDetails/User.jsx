import React, { useState, useEffect } from "react";

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const userDetails = {
    username: username,
    email: email,
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/signUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        });

        if (response.ok) {
          setUsername("");
          setEmail("");
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Error fetching user data:", response.statusText);
          setUserData({ error: "Failed to fetch user data" });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData({ error: "Failed to fetch user data" }); 
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h1>Welcome, {userData.username}</h1>
          <p>Email: {userData.email}</p>
        </>
      ) : userData?.error ? (
        <p>Error: {userData.error}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserProfile;
