import { useNavigate, useParams } from "react-router-dom";
import { addProduct, getProductById, editProduct } from "../service/localstorage";
import { useForm } from "../hooks/useForm";
import uuid from "react-uuid";
import { useState, useEffect } from "react";

export const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    pid: "",
    name: "",
    price: "",
  });

  useEffect(() => {
    if (id) {
      const product = getProductById(id);
      setForm(product);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra nhập liệu
    if (!inputValues.pid || !inputValues.price || isNaN(inputValues.pid) || isNaN(inputValues.price)) {
      alert("Please enter a valid ID and Price.");
      return;
    }

    id ? editProduct(id, inputValues) : addProduct({ id: uuid(), ...inputValues });
    resetForm();
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>
          Back
        </button>
        <h1 className="text-center">{id ? "Edit" : "Add new"} Product</h1>
        <div />
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              ID
            </label>
            <input
              name="pid"
              type="text"
              value={inputValues.pid}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={inputValues.price}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary btn-block">
              {id ? "Edit" : "Add"} Product
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success">
            <strong>Well done!</strong> {id ? "edit" : "added a new"} Product.
          </div>
        </div>
      )}

      {/* Hiển thị thông tin chi tiết của sản phẩm */}
      {id && (
        <div className="card border-primary p-5 m-5">
          <h2>Product Details:</h2>
          <p>ID: {inputValues.pid}</p>
          <p>Name: {inputValues.name}</p>
          <p>Price: {inputValues.price}</p>
        </div>
      )}
    </div>
  );
};
