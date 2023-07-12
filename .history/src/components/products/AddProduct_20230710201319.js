import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  let history = useNavigate();

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
    await axios.post("http://localhost:3000/products", product);
    setSuccessMessage("Product added successfully!"); // Set the success message
    setTimeout(() => {
      setSuccessMessage(""); // Clear the success message after a certain time
      history("/");
    }, 3000);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1 className="display-4 text-center mb-5">Add Product</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}{" "}
        {/* Display the success message */}
        <form onSubmit={(e) => onSubmit(e)}>
          {/* Form inputs */}
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
