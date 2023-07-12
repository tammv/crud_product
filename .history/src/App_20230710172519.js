import "./App.css";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ManageProduct from "./components/pages/ManageProduct";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import UpdateProduct from "./components/products/UpdateProduct";
import Product from "./components/products/Product";
import AddProduct from "./components/products/AddProduct";
import Login from "./components/auth/Login";
import { PrivateRoute } from "./components/auth/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Navigate to="/manage-product" />} />
              <PrivateRoute path="/manage-product" element={<ManageProduct />} />
              <PrivateRoute path="/products/add" element={<AddProduct />} />
              <PrivateRoute path="/products/update/:id" element={<UpdateProduct />} />
              <PrivateRoute path="/products/:id" element={<Product />} />
            </>
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
