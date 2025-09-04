import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTOCart, removeFromFavorites } from "./store";

const Favorites_Card = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addTOCart(product));
    }
  };

  return (
    <div className="relative max-w-xs rounded-2xl shadow-md hover:scale-105 transition-transform bg-white">
      {/* Remove from Favorites Button */}
      <button
        onClick={() => dispatch(removeFromFavorites(product))}
        className="absolute top-2 right-2 text-red-500 hover:scale-110 transition-transform"
      >
        ❤️
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain p-4"
      />

      {/* Product Details */}
      <div className="p-4 text-left">
        <h2 className="text-lg font-bold mb-2 truncate">{product.title}</h2>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400">⭐ {product.rating.rate}</span>
          <span className="text-gray-500 text-sm">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-blue-600 mt-2">
          ${product.price}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-full mt-4 py-2 rounded-lg font-bold transition ${
            isInCart
              ? "bg-green-500 text-white cursor-not-allowed"
              : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Favorites_Card;
