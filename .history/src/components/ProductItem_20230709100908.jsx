import React, { useState } from "react";
import { removeProduct, getProductById } from "../service/localstorage";
import { getListProduct } from "../service/localstorage";
import { useNavigate } from "react-router-dom";

export const ProductItem = ({ product, setProduct }) => {
  const { id, pid, name, price } = product;
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const productDetail = getProductById(id);

  const deleteProduct = () => {
    removeProduct(id);
    setProduct(getListProduct());
  };

  const viewDetail = () => {
    if (productDetail) {
      setShowDetail(true);
    }
  };

  return (
    <tr className="table-primary">
      <th>{pid}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <div className="d-flex gap-3">
          <span type="button" className="badge bg-info" onClick={viewDetail}>
            Detail
          </span>
          <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-product/${id}`)}>
            Edit
          </span>
          <span type="button" className="badge bg-danger" onClick={() => deleteProduct()}>
            Delete
          </span>
        </div>
      </td>
      {showDetail && (
        <td colSpan={4}>
          <div>
            <h2>Product Detail:</h2>
            <p>ID: {productDetail.id}</p>
            <p>Name: {productDetail.name}</p>
            <p>Price: {productDetail.price}</p>
            {/* Add other product details if needed */}
          </div>
        </td>
      )}
    </tr>
  );
};
