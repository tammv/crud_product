import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import UpdateUser from "./components/users/UpdateUser";
import User from "./components/users/User";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/update/:id" element={<UpdateUser />} />
          <Route exact path="/users/:id" element={<User />}></Route>
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
