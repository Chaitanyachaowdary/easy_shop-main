import React from "react";
import { useSelector } from "react-redux";
import Favorites_Card from "./Favorites_Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.cart.favorites || []);

  return (
    <div className="px-6 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">My Wishlist</h2>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          {/* Empty Wishlist Illustration */}
          <img
            src="https://ouch-cdn2.icons8.com/-qpU9-NqW7SLQmJlaZ6cfJx29EvXw8od5P3-H6O04tI/rs:fit:256:228/czM6Ly9pY29uczguY29tL3ZlY3RvcnMvbGluZS1hcnQtcGVvcGxlLXdpdGgtZW1wdHktbGlzdC8yMDgtbWVyY2hhbnQtZnJlZS1wbGFjZS5wbmc.png"
            alt="No Favorites"
            className="w-64 mb-5"
          />

          <h3 className="text-lg text-gray-600 mb-2">
            You haven&apos;t added any favorites yet!
          </h3>

          <p className="text-gray-500">
            Browse our products and tap the{" "}
            <span className="text-red-500">♡</span> to add your favorites here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <Favorites_Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
