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
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLoginSubmit}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
