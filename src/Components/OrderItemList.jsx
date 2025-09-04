import React from "react";

const OrderItemList = ({ items, expanded }) => {
  if (!expanded) return null;

  return (
    <div className="mt-2 bg-gray-50 rounded-lg p-2">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b last:border-0 border-gray-200 py-2"
          >
            <span className="text-sm text-gray-700">
              {item.title} <span className="text-gray-500">(x{item.quantity})</span>
            </span>
            <span className="font-bold text-gray-800">${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItemList;
