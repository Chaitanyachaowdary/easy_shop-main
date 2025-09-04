import React, { useEffect, useState } from "react";
import Products_Card from "./Products_Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Extract unique categories
  const categories = ["All", ...new Set(productsList.map((p) => p.category))];

  // Filtered products
  const filteredProducts =
    selectedCategory === "All"
      ? productsList
      : productsList.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6">
      {/* Category Filter */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 mb-2">
          Filter by Category
        </h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-72 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          {categories.map((category) => (
            <option key={category} value={category} className="capitalize">
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredProducts.map((product) => (
            <Products_Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6 text-lg">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default Products;
