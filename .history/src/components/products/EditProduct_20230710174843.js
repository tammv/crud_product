import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();
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
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/products/${id}`, product);
    navigate("/");
  };

  const loadProduct = async () => {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    setProduct(response.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Product</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          {/* Form inputs */}
          <button className="btn btn-warning btn-block">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
