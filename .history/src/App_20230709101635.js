import { ProductList } from "./components/ProductList";
import { Navbar } from "./components/Navbar";
import { ProductForm } from "./components/ProductForm";
import { ProductDetail } from "./components/ProductDetail"; // Import ProductDetail component
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/create-product" element={<ProductForm />} />
          <Route path="/edit-product/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </div>
  );
};
