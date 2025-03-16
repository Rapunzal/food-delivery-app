import React, { use } from "react";
import useCartStore from "../stores/CartStore";

const Order = () => {
  const { cartItems, cartTotal } = useCartStore();
  const userSession = JSON.parse(localStorage.getItem("user-session"));
  console.log(userSession.state.accessToken);
  return (
    <div className=" h-screen flex justify-around w-full">
      {/* <h1 className="text-center underline">Cart Total</h1> */}
      {/* <p>{userSession !== null && userSession.state.user.email}</p> */}
      <div>
        <p>Address</p>
        <form>
          <div className="grid grid-cols-[_.5Fr_1Fr]">
            <label> First Name :</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="border rounded"
            />
          </div>
          <div className="grid grid-cols-[_.5Fr_1Fr]">
            <label> Last Name :</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="border rounded"
            />
          </div>
          <div className="grid grid-cols-[_.5Fr_1Fr]">
            <label> Email :</label>
            <input
              type="email"
              placeholder="Enter email id"
              className="border rounded"
            />
          </div>
          <div className="grid grid-cols-[_.5Fr_1Fr]">
            <label> Phone :</label>
            <input
              type="number"
              placeholder="Enter Phone no"
              className="border rounded"
            />
          </div>
          <div className="grid grid-cols-[_1Fr_1Fr]">
            <label> Street Address :</label>
            <input
              type="text"
              placeholder="Enter Street address"
              className="border rounded"
            />
          </div>
        </form>
      </div>
      <div>
        <p>Cart Total </p>
        <p>Total: ${cartTotal()}</p>
        <p>Delivery Charges: $ 5</p>
      </div>
    </div>
  );
};

export default Order;
