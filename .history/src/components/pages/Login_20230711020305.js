import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async () => {
    try {
      // Perform authentication logic
      const isAuthenticated = true; // Replace with your authentication logic

      if (isAuthenticated) {
        handleLogin(); // Call the handleLogin function passed from App component
        navigate("/manage-product"); // Navigate to the manage product page
      } else {
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
        <button type="button" onClick={handleLoginSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
