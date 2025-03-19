import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../stores/CartStore";

const Payment = () => {
  const navigate = useNavigate();
  const { cartTotal } = useCartStore();
  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/generateOrder");
  };
  return (
    <div className="h-screen py-10 flex justify-center align-middle w-full">
      <div className="mt-20 mr-4 text-xl">Total Amount: ${cartTotal()}</div>
      <div className="border h-[340px] w-[350px]">
        <h2 className="text-center p-4 text-gray-500 ">Credit Card Details</h2>
        <h3 lassName="text-center p-4 text-gray-500 "></h3>
        <form className="grid grid-cols-1 gap-4 p-4">
          <div className="grid grid-cols-1">
            <input
              type="text"
              placeholder="Full Name On Card"
              className="border rounded px-1"
            />
          </div>
          <div className="grid grid-cols-1">
            <input
              type="number"
              placeholder="Card Number"
              className="border rounded "
            />
          </div>
          <div className="grid grid-cols-2">
            <input type="text" placeholder="MM/YY" className="border rounded" />
            <input type="number" placeholder="CVC" className="border rounded" />
          </div>
          <div className="grid grid-cols-1">
            <img src="./credit_card.jpg" className="h-16 w-36" />
          </div>
          <div className="grid grid-cols-1">
            <button
              onClick={handlePayment}
              className="bg-orange-400 text-white rounded"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
