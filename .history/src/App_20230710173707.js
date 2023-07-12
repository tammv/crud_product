import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ManageProduct from "./components/pages/ManageProduct";
import NotFound from "./components/pages/NotFound";
import UpdateProduct from "./components/products/UpdateProduct";
import Product from "./components/products/Product";
import AddProduct from "./components/products/AddProduct";
import Login from "./components/auth/Login";

function App() {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {isAuthenticated ? (
            <Route path="/manage-product" element={<ManageProduct />} />
          ) : (
            <Navigate to="/login" replace />
          )}
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/update/:id" element={<UpdateProduct />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
