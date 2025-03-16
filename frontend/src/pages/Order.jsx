import React, { use } from "react";
import useCartStore from "../stores/CartStore";

const Order = () => {
  const { cartItems, cartTotal } = useCartStore();
  const userSession = JSON.parse(localStorage.getItem("user-session"));
  console.log(userSession.state.accessToken);
  return (
    <div className=" h-screen flex justify-evenly  w-full">
      {/* <h1 className="text-center underline">Cart Total</h1> */}
      {/* <p>{userSession !== null && userSession.state.user.email}</p> */}
      <div>
        <p className="text-center">Address</p>
        <form className="border border-gray-200 p-4">
          <div className="m-2">
            <label className="inline-block w-40 text-left ">First Name :</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Last Name :</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Email :</label>
            <input
              type="email"
              placeholder="Enter email id"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Phone :</label>
            <input
              type="number"
              placeholder="Enter Phone no"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left">
              {" "}
              Street Address :
            </label>
            <input
              type="text"
              placeholder="Enter Street address"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Apartment :</label>
            <input
              type="text"
              placeholder="Enter Apartment"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> City :</label>
            <input
              type="text"
              placeholder="Enter City"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Country :</label>
            <input
              type="text"
              placeholder="Enter COUNTRY"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> State :</label>
            <input
              type="text"
              placeholder="Enter State"
              className="border rounded w-56 px-1"
            />
            <div className="m-2">
              <label className="inline-block w-40 text-left"> Zipcode :</label>
              <input
                type="text"
                placeholder="Enter Zipcode"
                className="border rounded w-56 px-1"
              />
            </div>
            {/* <div className="m-2">
              <label className="inline-block w-40 text-left"> </label>
            
            </div> */}
          </div>
        </form>
      </div>
      <div className="py-20">
        <p className="font-semibold underline ">Cart Total </p>
        <div className="flex py-2">
          <p className="w-36">Total:</p> ${cartTotal()}
        </div>
        <div className="flex">
          <p className="w-36">Delivery Charges:</p> $5
        </div>
        <div>
          <button className="border bg-orange-500 hover:bg-orange-600 text-white rounded px-2 my-4">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
