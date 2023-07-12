import React from "react";
import { getProductById } from "../service/localstorage";

export const ProductDetail = ({ productId }) => {
  const product = getProductById(productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>Product Detail:</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      {/* Add other product details if needed */}
    </div>
  );
};
