import React from "react";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import OrderItemList from "./OrderItemList";

const OrderCard = ({ order, expanded, toggleExpand, removeOrder, isFirst, isLast }) => {
  return (
    <div className="mb-6 flex items-start relative">
      {/* Timeline Line */}
      <div
        className={`w-1 bg-blue-600 absolute left-4 ${
          isFirst ? "top-3" : "top-0"
        } ${isLast ? "bottom-1/2" : "bottom-0"}`}
      ></div>

      {/* Order Card */}
      <div className="relative ml-12 flex-1 rounded-xl shadow-md bg-white p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Order #{order.id}</h3>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-700"
                : order.status === "Shipped"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.status}
          </span>
        </div>

        {/* Order Details */}
        <p className="text-gray-500 text-sm mt-1">📅 {order.date}</p>
        <p className="text-lg font-bold mt-1">💰 ${Number(order.totalPrice).toFixed(2)}</p>

        {/* Expand Button */}
        <button
          onClick={() => toggleExpand(order.id)}
          className="mt-2 flex items-center text-sm font-bold text-blue-600 hover:underline"
        >
          {expanded ? "Hide Details" : "View Details"}
          {expanded ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
        </button>

        {/* Order Items (Dropdown) */}
        <OrderItemList items={order.items} expanded={expanded} />

        {/* Divider */}
        <hr className="my-3 border-gray-200" />

        {/* Cancel Order Button */}
        <button
          onClick={removeOrder}
          className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg"
        >
          <Trash2 className="w-4 h-4" /> Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
