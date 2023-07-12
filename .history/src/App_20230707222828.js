import { ProductList } from "./components";
import { Navbar } from "./components";
import { ProductForm } from "./components";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/create-product" element={<ProductForm />} />
          <Route path="/edit-product/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </div>
  );
};
