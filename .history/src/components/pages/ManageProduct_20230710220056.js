import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      loadProducts();
      setSuccessMessage("Product deleted successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const showDeleteConfirmation = (id) => {
    setDeleteProductId(id);
    setShowConfirmation(true);
  };

  const hideDeleteConfirmation = () => {
    setDeleteProductId(null);
    setShowConfirmation(false);
  };

  const confirmDelete = () => {
    deleteProduct(deleteProductId);
    hideDeleteConfirmation();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Product List</h1>

        {showConfirmation && (
          <div className="alert alert-danger" role="alert">
            Are you sure you want to delete this product?
            <button className="btn btn-danger btn-sm ml-2" onClick={confirmDelete}>
              Delete
            </button>
            <button className="btn btn-secondary btn-sm ml-2" onClick={hideDeleteConfirmation}>
              Cancel
            </button>
          </div>
        )}

        {successMessage && <div className="alert alert-success">{successMessage}</div>}

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
                  <Link className="btn btn-primary mr-3" to={`/products/${product.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mr-3" to={`/products/update/${product.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={() => showDeleteConfirmation(product.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-light btn-floating" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </button>
      </div>
    </div>
  );
};

export default ManageProduct;
