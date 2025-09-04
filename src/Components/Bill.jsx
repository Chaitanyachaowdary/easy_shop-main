import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToHistory, reset } from "./store";

const Bill = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const generateOrderId = () => `ORD${Date.now()}`;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Order placed successfully! 🎉", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });

    const newOrder = {
      id: generateOrderId(),
      date: new Date().toISOString().split("T")[0],
      items: cart,
      totalPrice: totalPrice,
      status: "Shipped",
    };

    dispatch(addToHistory(newOrder));
    dispatch(reset());
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-3">Order Summary</h2>
          <hr className="mb-4" />

          {/* List of Items */}
          <ul className="divide-y">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <div>
                  <p className="text-sm font-medium">
                    {item.title.length > 30
                      ? item.title.slice(0, 30) + "..."
                      : item.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <hr className="my-3" />

          {/* Total Items */}
          <div className="flex justify-between mb-1">
            <span>Total Items:</span>
            <span className="font-semibold">{totalItems}</span>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between mb-1">
            <span>Subtotal:</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>

          <hr className="my-3" />

          {/* Grand Total */}
          <div className="flex justify-between mt-1">
            <span className="text-lg font-semibold">Grand Total:</span>
            <span className="text-lg font-bold text-blue-600">
              ${totalPrice}
            </span>
          </div>

          {/* Place Order Button */}
          <div className="mt-4">
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart State
        <div className="text-center mt-10 p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-20 w-20 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9" />
          </svg>
          <h2 className="mt-3 text-lg font-bold text-gray-500">
            Your cart is empty!
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Looks like you haven't added anything yet. Browse our products and
            start shopping!
          </p>
        </div>
      )}
    </>
  );
};

export default Bill;
