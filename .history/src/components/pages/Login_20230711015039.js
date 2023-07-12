import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data.users;

      const user = users.find(
        (user) => user.username === credentials.username && user.password === credentials.password
      );

      if (user) {
        // Authentication successful
        setErrorMessage("");
        // Redirect to the desired page
      } else {
        // Authentication failed
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while logging in");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
