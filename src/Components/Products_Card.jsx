import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTOCart, addToFavorites, removeFromFavorites } from "./store";
import { useNavigate } from "react-router-dom";

const truncateText = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const Products_Card = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.cart.favorites);

  const isInCart = cart.some((item) => item.id === product.id);
  const isFavorite = favorites?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addTOCart(product));
    }
  };

  const handleBuyNow = () => {
    dispatch(addTOCart(product));
    navigate("/bill");
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div className="relative max-w-xs bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-105 overflow-hidden">
      {/* Favorite Button */}
      <button
        onClick={handleToggleFavorite}
        className={`absolute top-3 right-3 text-xl ${
          isFavorite ? "text-red-500" : "text-gray-400"
        }`}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-contain p-4"
      />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">
          {truncateText(product.title, 25)}
        </h2>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i < Math.round(product.rating.rate) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-blue-600 mb-3">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          {isInCart ? (
            <button
              disabled
              className="w-full py-2 text-sm font-bold rounded-lg bg-green-500 text-white cursor-not-allowed"
            >
              Added
            </button>
          ) : (
            <>
              <button
                onClick={handleAddToCart}
                className="w-full py-2 text-sm font-bold rounded-lg bg-purple-500 hover:bg-purple-600 text-white"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full py-2 text-sm font-bold rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                Buy Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products_Card;
