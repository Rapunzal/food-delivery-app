import React, { use } from "react";
import useCartStore from "../stores/CartStore";

const Order = () => {
  const { cartItems, cartTotal } = useCartStore();
  const userSession = JSON.parse(localStorage.getItem("user-session"));
  console.log(userSession.state.accessToken);
  return (
    <div className=" h-screen">
      <h1 className="text-center underline">Order Page</h1>
      {/* <p>{userSession !== null && userSession.state.user.email}</p> */}
    </div>
  );
};

export default Order;
