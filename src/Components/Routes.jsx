import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"; 
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Nav from "./Nav";
import Products from "./Products";
import Cart from "./Cart";
import Bill from "./Bill";
import OrderHistory from "./OrderHistory";
import Favorites from "./Favorites";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Nav />
      <Switch>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Bill />} path="/bill" />
        <Route element={<OrderHistory />} path="/orderhistory" />
        <Route element={<Favorites />} path="/favorites" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
