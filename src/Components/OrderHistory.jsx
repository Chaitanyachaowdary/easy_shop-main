import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromHistory } from "./store";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import OrderCard from "./OrderCard";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderHistory.orderHistory);
  const navigate = useNavigate();
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 p-4">
      {orders.length > 0 ? (
        <>
          <h2 className="text-xl font-bold text-center mb-6">📜 Order Timeline</h2>

          <div className="relative pl-2">
            {orders.map((order, index) => (
              <OrderCard
                key={order.id}
                order={order}
                expanded={expandedOrder === order.id}
                toggleExpand={toggleExpand}
                removeOrder={() => dispatch(removeFromHistory(order.id))}
                isFirst={index === 0}
                isLast={index === orders.length - 1}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center mt-10">
          <ShoppingCart className="w-20 h-20 mx-auto text-gray-400" />
          <p className="text-lg font-semibold text-gray-600 mt-2">
            Your order history is empty!
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Looks like you haven't placed any orders yet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition"
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
