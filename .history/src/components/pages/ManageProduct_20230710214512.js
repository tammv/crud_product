import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setSuccessMessage("Product deleted successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        loadProducts();
      }, 3000);
    } catch (error) {
      setErrorMessage("Error deleting product");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Product List</h1>

        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <table className="table table-bordered table-striped shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <div className="row">
                    <Link className="btn btn-primary mr-3 col-3" to={`/products/${product.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mr-3 col-3" to={`/products/update/${product.id}`}>
                      Edit
                    </Link>
                    <button className="btn btn-danger mr-3 col-3" onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
