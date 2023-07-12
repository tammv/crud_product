import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from "react-router-dom";
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

  // Get the current location
  const location = useLocation();

  // Check if the current location is the login page
  const isLoginPage = location.pathname === "/login";

  return (
    <Router>
      <div className="App">
        {!isLoginPage && <Navbar />} {/* Hide Navbar on the login page */}
        <Routes>
          <Route path="/" element={<Outlet />} /> {/* Outlet will render the child routes */}
          <Route element={isAuthenticated ? <Outlet /> : <Login handleLogin={handleLogin} />} />
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
