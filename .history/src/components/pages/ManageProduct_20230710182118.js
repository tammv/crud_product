import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageProduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3000/products");
    // console.log(result);
    setProduct(result.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    loadProducts();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Product List</h1>

        <table class="table table-bordered table-striped shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Link className="btn btn-primary mr-3" to={`/products/${product.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mr-3" to={`/products/update/${product.id}`}>
                    Edit
                  </Link>
                  <Link className="btn btn-danger mr-3" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </Link>
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
