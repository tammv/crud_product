import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./user.json";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const user = users.find((user) => user.username === credentials.username && user.password === credentials.password);
    if (user) {
      // Authentication successful
      setError("");
      navigate("/manage-product"); // Redirect to the manage product page
    } else {
      // Authentication failed
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
