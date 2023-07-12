import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import ManageProduct from "./components/pages/ManageProduct";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import UpdateProduct from "./components/products/UpdateProduct";
import Product from "./components/products/Product";
import AddProduct from "./components/products/AddProduct";
import Login from "./components/pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Outlet /> : <Login handleLogin={handleLogin} />} />
          {isAuthenticated && (
            <>
              <Route path="/manage-product" element={<ManageProduct />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/update/:id" element={<UpdateProduct />} />
              <Route path="/products/:id" element={<Product />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
