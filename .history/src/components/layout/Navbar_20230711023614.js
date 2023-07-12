import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate("/"); // Redirect to the login page
    window.location.reload(); // Reload the page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MVT's CRUD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light " to="/products/add">
          ADD PRODUCT
        </Link>
        &nbsp;
        <button className="btn btn-outline-light btn-danger" onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
