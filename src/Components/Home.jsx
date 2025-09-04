import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-center items-center text-center h-screen overflow-hidden bg-gradient-to-br from-[#4facfe] to-[#00f2fe] text-white">
      {/* Floating Blur Effects */}
      <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] bg-white/20 blur-[80px] rounded-full"></div>
      <div className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] bg-white/15 blur-[100px] rounded-full"></div>

      {/* Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to <span className="text-yellow-300">ShopEasy</span> 🛒
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-lg md:text-xl mt-4 opacity-90">
          Your One-Stop Destination for Quality Products!
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <button
          onClick={() => navigate("/products")}
          className="mt-6 px-6 py-3 flex items-center gap-2 rounded-lg font-bold text-black bg-yellow-300 hover:bg-yellow-400 transition"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          Shop Now
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
