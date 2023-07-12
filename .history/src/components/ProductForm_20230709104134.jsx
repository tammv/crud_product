import { useNavigate, useParams, Link } from "react-router-dom";
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
    if (
      !inputValues.pid ||
      !inputValues.name ||
      !inputValues.price ||
      isNaN(inputValues.pid) ||
      isNaN(inputValues.price) ||
      inputValues.price < 0
    ) {
      setshowAlert(true);
      return;
    }

    id ? editProduct(id, inputValues) : addProduct({ id: uuid(), ...inputValues });
    resetForm();
    setshowAlert(false);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !value) {
      setshowAlert(true);
    } else if (!value || isNaN(value) || value < 0) {
      setshowAlert(true);
    } else {
      setshowAlert(false);
    }
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
              onBlur={handleBlur}
              className={`form-control ${
                showAlert && (!inputValues.pid || isNaN(inputValues.pid)) ? "is-invalid" : ""
              }`}
              id="inputValid"
            />
            {showAlert && (!inputValues.pid || isNaN(inputValues.pid)) && (
              <div className="invalid-feedback">Please enter a valid ID.(Only number)</div>
            )}
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
              onBlur={handleBlur}
              className={`form-control ${showAlert && !inputValues.name ? "is-invalid" : ""}`}
              id="inputValid"
            />
            {showAlert && !inputValues.name && (
              <div className="invalid-feedback">Please enter a valid name.(Do not leave it empty)</div>
            )}
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
              onBlur={handleBlur}
              className={`form-control ${
                showAlert && (!inputValues.price || isNaN(inputValues.price) || inputValues.price < 0)
                  ? "is-invalid"
                  : ""
              }`}
              id="inputValid"
            />
            {showAlert && (!inputValues.price || isNaN(inputValues.price) || inputValues.price < 0) && (
              <div className="invalid-feedback">Please enter a valid price.(Only Number and not negative)</div>
            )}
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary btn-block">
              {id ? "Edit" : "Add"} Product
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="alert alert-danger px-5" role="alert">
          Please enter valid values for ID, Name, and Price.
        </div>
      )}

      {id && (
        <div className="cardborder-primary p-5 m-5">
          <h2>Product Details:</h2>
          <p>ID: {inputValues.pid}</p>
          <p>Name: {inputValues.name}</p>
          <p>Price: {inputValues.price}</p>
          <Link to={`/product/${id}`} className="btn btn-info">
            View Details
          </Link>
        </div>
      )}
    </div>
  );
};
