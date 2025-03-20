import React from "react";
import useCartStore from "../stores/CartStore";
import userStore from "../stores/UserStore";
import { useLocation } from "react-router-dom";

//Page to generate order
const GenerateOrder = () => {
  const { user } = userStore.getState();
  const cartData = useCartStore((state) => state.cartData);
  const { orderId } = useCartStore();
  const location = useLocation();

  return (
    <div className="py-20 flex justify-center  w-full h-screen">
      <div>
        <p className="text-xl">Order Placed Successfully</p>
        <p>Your Order No is: {orderId}</p>
      </div>
    </div>
  );
};

export default GenerateOrder;
