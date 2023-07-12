import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1 className="display-4 text-center mb-5">Add Product</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-row align-items-center">
            <div className="col-sm-6 my-1">
              <label className="sr-only" for="inlineFormInputName">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputName"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-sm-6 my-1">
              <label className="sr-only" for="inlineFormInputGroupUsername">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Enter Username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="form-group col-md-12 mt-4">
              <input
                type="email"
                className="form-control form-control-md"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group col-md-12 mt-3">
              <input
                type="number"
                className="form-control form-control-md"
                placeholder="Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group col-md-12 mt-3">
              <input
                type="text"
                className="form-control form-control-md"
                placeholder="Website Name"
                name="website"
                value={website}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
