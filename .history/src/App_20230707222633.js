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
          <Route path="/create-employee" element={<ProductForm />} />
          <Route path="/edit-employee/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </div>
  );
};
