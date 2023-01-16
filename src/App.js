import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Category from "./pages/Category/Category";
import Line from "./pages/Chart/Line";
import Pie from "./pages/Chart/Pie";
import Bar from "./pages/Chart/Bar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Option from "./pages/Option/Option";
import Product from "./pages/Product/Product";
import Role from "./pages/Role/Role";
import Telematics from "./pages/Telematics/Telematics";
import User from "./pages/User/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Admin />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/role" element={<Role />} />
          <Route path="/telematics" element={<Telematics />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/option" element={<Option />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
