import axios from "axios";
import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  let history = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const { name, price } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/products/${id}`, product);
    history("/");
  };

  const loadProducts = async () => {
    const result = await axios.get(`http://localhost:3003/products/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1 className="display-4 text-center mb-5">Update product</h1>
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
                placeholder="Enter Name product"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
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
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
