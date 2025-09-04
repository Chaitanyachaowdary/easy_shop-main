import React from "react";
import { useSelector } from "react-redux";
import Cart_Card from "./Cart_Card";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-8 min-h-[80vh] max-w-6xl mx-auto text-center">
      {cartData.length > 0 ? (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            🛒 Your Shopping Cart
          </h2>

          {/* Responsive Grid for Cart Items */}
          <div className="grid gap-6 justify-center items-start grid-cols-1 lg:grid-cols-2">
            {cartData.map((item) => (
              <Cart_Card key={item.id} product={item} />
            ))}
          </div>

          {/* Proceed to Checkout Button */}
          <button
            onClick={() => navigate("/bill")}
            className="mt-8 px-6 md:px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-md transition hover:bg-blue-700"
          >
            Proceed to Checkout 💳
          </button>
        </>
      ) : (
        <div className="mt-16 text-center">
          <div className="text-gray-400 text-[100px]">🛒</div>
          <h3 className="mt-4 text-xl font-semibold text-gray-600">
            Your cart is empty!
          </h3>
          <p className="mt-2 text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="mt-6 px-6 md:px-8 py-3 bg-pink-500 text-white text-lg font-bold rounded-full shadow-md transition hover:bg-pink-600"
          >
            🛍️ Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
