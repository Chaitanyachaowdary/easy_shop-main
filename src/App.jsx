import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./Components/Login";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Bill from "./Components/Bill";
import OrderHistory from "./Components/OrderHistory";
import Favorites from "./Components/Favorites";
import { ToastContainer } from "react-toastify";
import Nav from "./Components/Nav";

function Layout() {
  const location = useLocation();

  // Hide Nav only on login page (/)
  const hideNav = location.pathname === "/";

  return (
    <>
      <ToastContainer />
      {!hideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
