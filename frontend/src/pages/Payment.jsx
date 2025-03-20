import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../stores/CartStore";
import userStore from "../stores/UserStore";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Payment = () => {
  let url = import.meta.env.VITE_API;
  //const Url = "http://localhost:8080/";
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = userStore.getState();
  const { setCartData } = useCartStore();
  const cartData = useCartStore((state) => state.cartData);
  const { cartTotal } = useCartStore();
  const handlePayment = async (event) => {
    event.preventDefault();
    navigate("/generateOrder");
  };
  return (
    <div className="h-screen py-10 flex justify-center align-middle w-full">
      <div className="mt-20 mr-4 text-xl">
        Total Amount: ${location.state.result}
      </div>
      <div className="border h-[380px] w-[350px]">
        <h2 className="text-center p-4 text-gray-500 ">Credit Card Details</h2>
        <h3 className="text-center p-4 text-gray-500 "></h3>
        <form className="grid grid-cols-1 gap-4 p-4" onSubmit={handlePayment}>
          <div className="grid grid-cols-1">
            <input
              type="text"
              placeholder="Full Name On Card"
              className="border rounded px-1"
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <input
              type="number"
              placeholder="Card Number"
              className="border rounded "
              required
            />
          </div>
          <div className="grid grid-cols-2">
            <input
              type="text"
              placeholder="MM/YY"
              className="border rounded"
              required
            />
            <input
              type="number"
              placeholder="CVC"
              className="border rounded"
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <img src="./credit_card.jpg" className="h-16 w-36" />
          </div>
          <div className="grid grid-cols-1">
            <button className="bg-orange-400 text-white rounded">
              Sumbit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
