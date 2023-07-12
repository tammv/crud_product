import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { name, price } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const validateName = (value) => {
    if (!value) {
      setErrorMessage("Name is required");
    } else {
      setErrorMessage("");
    }
  };

  const validatePrice = (value) => {
    if (!/^\d+$/.test(value)) {
      setErrorMessage("Price must be a valid number");
    } else {
      setErrorMessage("");
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) {
      setErrorMessage("Please enter both name and price");
      return;
    }
    if (errorMessage) {
      return;
    }
    try {
      await axios.put(`http://localhost:3000/products/${id}`, product);
      setSuccessMessage("Product updated successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/manage-product");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const loadProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onCancel = () => {
    navigate("/manage-product");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1 className="display-4 text-center mb-5">Update product</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={onSubmit}>
          <div className="form-row align-items-center">
            <div className="col-sm-6 my-1">
              <label className="sr-only" htmlFor="inlineFormInputName">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputName"
                placeholder="Enter Name product"
                name="name"
                value={name}
                onChange={(e) => {
                  onInputChange(e);
                  validateName(e.target.value);
                }}
                onBlur={(e) => validateName(e.target.value)}
              />
            </div>
            <div className="col-sm-6 my-1">
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
                Price
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">$</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Enter Price"
                  name="price"
                  value={price}
                  onChange={(e) => {
                    onInputChange(e);
                    validatePrice(e.target.value);
                  }}
                  onBlur={(e) => validatePrice(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block">Update Product</button>
            <button type="button" className="btn btn-danger btn-block" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
