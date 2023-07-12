import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    if (!value) {
      setErrors({ ...errors, [name]: "This field is required" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleLoginSubmit = async () => {
    const { username, password } = credentials;

    if (!username || !password) {
      setErrors({
        username: username ? "" : "This field is required",
        password: password ? "" : "This field is required",
      });
      return;
    }

    try {
      // Perform authentication logic
      const isAuthenticated = true; // Replace with your authentication logic

      if (isAuthenticated) {
        handleLogin(); // Call the handleLogin function passed from App component
        navigate("/manage-product"); // Navigate to the manage product page
      } else {
        setErrors({ ...errors, username: "", password: "Invalid username or password" });
      }
    } catch (error) {
      console.error(error);
      setErrors({ ...errors, username: "", password: "An error occurred while logging in" });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username && "is-invalid"}`}
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password && "is-invalid"}`}
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
