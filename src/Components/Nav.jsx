import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Wishlist", path: "/favorites" },
  { label: "Cart", path: "/cart" },
  { label: "Bill", path: "/bill" },
  { label: "OrderHistory", path: "/orderhistory" },
];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const cartCount = cartItems ? cartItems.length : 0;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Mobile Hamburger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={handleDrawerToggle}
                className="text-white focus:outline-none"
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Center: Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-white flex-1 text-center md:text-left"
            >
              ShopEasy
            </Link>

            {/* Right: Desktop Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) =>
                item.label === "Cart" ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-white font-medium flex items-center space-x-2 hover:text-yellow-200 transition"
                  >
                    <span>Cart</span>
                    <div className="relative">
                      <ShoppingCart size={22} />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                          {cartCount}
                        </span>
                      )}
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-white font-medium hover:text-yellow-200 transition"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleDrawerToggle}>
          <div
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-4">
              {navItems.map((item) =>
                item.label === "Cart" ? (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="flex items-center justify-between text-gray-700 font-medium hover:text-blue-500"
                      onClick={handleDrawerToggle}
                    >
                      <span>Cart</span>
                      <div className="relative">
                        <ShoppingCart size={22} />
                        {cartCount > 0 && (
                          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                            {cartCount}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-gray-700 font-medium hover:text-blue-500"
                      onClick={handleDrawerToggle}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Push content down to avoid overlap */}
      <div className="mt-16" />
    </>
  );
};

export default Nav;
