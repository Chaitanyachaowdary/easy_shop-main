import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./store";

const Cart_Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between w-4/5 mx-auto p-4 mb-4 bg-white rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full sm:w-24 h-28 sm:h-24 object-contain rounded-lg"
      />

      {/* Product Details */}
      <div className="flex-1 px-2 text-center sm:text-left">
        <p className="font-semibold text-gray-800 truncate max-w-[200px]">
          {product.title}
        </p>
        <p className="text-gray-500 text-sm mt-1">${product.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg mt-2 sm:mt-0 sm:mx-3">
        {/* Decrease Quantity or Remove */}
        {product.quantity > 1 ? (
          <button
            onClick={() => dispatch(decreaseQuantity(product.id))}
            className="p-1 text-blue-600 hover:text-blue-800"
          >
            ➖
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeFromCart(product.id))}
            className="p-1 text-red-600 hover:text-red-800"
          >
            🗑
          </button>
        )}

        {/* Quantity */}
        <span className="mx-2 font-bold text-base">{product.quantity}</span>

        {/* Increase Quantity */}
        <button
          onClick={() => dispatch(increaseQuantity(product.id))}
          className="p-1 text-blue-600 hover:text-blue-800"
        >
          ➕
        </button>
      </div>
    </div>
  );
};

export default Cart_Card;
