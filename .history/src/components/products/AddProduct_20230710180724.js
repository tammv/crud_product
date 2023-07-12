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

  const { name, price } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/products", product);
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
                  placeholder="Enter price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
