import { ManageProduct } from "./components/ManageProduct ";
import { Navbar } from "./components/Navbar";
import { ProductForm } from "./components/ProductForm";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ManageProduct />} />

          <Route path="/create-product" element={<ProductForm />} />
          <Route path="/edit-product/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </div>
  );
};
