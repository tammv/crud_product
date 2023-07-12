import React from "react";
import { removeProduct } from "../service/localstorage";
import { getListProduct } from "../service/localstorage";
import { useNavigate } from "react-router-dom";

export const ProductItem = ({ product, setProduct }) => {
  const { id, pid, name, price } = product;
  const navigate = useNavigate();

  const deleteEmployee = () => {
    removeProduct(id);
    setProduct(getListProduct());
  };

  return (
    <tr className="table-primasry">
      <th>{pid}</th>
      <td>{name}</td>
      <td>{price}</td>

      <td>
        <div className="d-flex gap-3">
          <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>
            Edit
          </span>
          <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};
