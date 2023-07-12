import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ManageProduct from "./components/pages/ManageProduct";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import UpdateProduct from "./components/products/UpdateProduct";
import Product from "./components/products/Product";
import AddProduct from "./components/products/AddProduct";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ManageProduct />} />
          <Route exact path="/products/add" element={<AddProduct />} />
          <Route exact path="/products/update/:id" element={<UpdateProduct />} />
          <Route exact path="/products/:id" element={<Product />}></Route>
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
