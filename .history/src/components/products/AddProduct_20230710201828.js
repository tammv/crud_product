import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const { name, price } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/products", product);
      setSuccessMessage("Product added successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1 className="display-4 text-center mb-5">Add Product</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onInputChange}
              placeholder="Enter product name"
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={price}
              onChange={onInputChange}
              placeholder="Enter product price"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Add Product
          </button>
          <button className="btn btn-danger btn-block">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
