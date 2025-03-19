import React, { use } from "react";
import useCartStore from "../stores/CartStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { cartItems, cartTotal, setOrderId, setCartData, cartData } =
    useCartStore();
  const userSession = JSON.parse(localStorage.getItem("user-session"));
  const navigate = useNavigate();
  //console.log(userSession.state.accessToken);
  const Url = "http://localhost:8080/";
  let ttl = cartTotal();
  if (Number(ttl) > 0) {
    ttl = Number(ttl) + 5;
  } else {
    ttl = 0;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(formData, " form data in order.jsx");
    console.log(formData.get("firstName"));

    try {
      const response = await axios.post(`${Url}orders/place/`, {
        address: formData,
        userId: userSession.state.user.id,
        cartItems: cartData,
        totalAmount: ttl,
      });
      console.log(response, " order page response");
      setCartData([]);
      setOrderId(response.data.response._id);
      if (response.statusText === "OK") {
        navigate("/payment");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {};
  return (
    <div className="  flex justify-evenly  w-full py-10">
      {/* <h1 className="text-center underline">Cart Total</h1> */}
      {/* <p>{userSession !== null && userSession.state.user.email}</p> */}
      <div>
        <p className="text-center text-xl">Shipping Address</p>
        <form className="border border-gray-200 p-4" onSubmit={handleSubmit}>
          <div className="m-2">
            <label className="inline-block w-40 text-left ">First Name :</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Last Name :</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Email :</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email id"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Phone :</label>
            <input
              name="phoneNumber"
              type="number"
              placeholder="Enter Phone no"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left">
              Street Address :
            </label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Enter Street address"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Apartment :</label>
            <input
              name="apartment"
              type="text"
              placeholder="Enter Apartment"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> City :</label>
            <input
              name="city"
              type="text"
              placeholder="Enter City"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> Country :</label>
            <input
              name="country"
              type="text"
              placeholder="Enter COUNTRY"
              className="border rounded w-56 px-1"
            />
          </div>
          <div className="m-2">
            <label className="inline-block w-40 text-left"> State :</label>
            <input
              name="state"
              type="text"
              placeholder="Enter State"
              className="border rounded w-56 px-1"
            />
            <div className="m-2">
              <label className="inline-block w-40 text-left"> Zipcode :</label>
              <input
                type="text"
                name="zipcode"
                placeholder="Enter Zipcode"
                className="border rounded w-56 px-1"
              />
            </div>
            {/* <div className="m-2">
              <label className="inline-block w-40 text-left"> </label>
            
            </div> */}
          </div>

          <div className="py-20">
            <p className="font-semibold underline ">Cart Total </p>
            <div className="flex py-2">
              <p className="w-36">Amount:</p> ${cartTotal()}
            </div>
            <div className="flex">
              <p className="w-36">Delivery Charges:</p> $5
            </div>
            <div className="flex">
              <p className="w-36">Total Amount:</p> ${ttl}
            </div>
            <div>
              <button
                onClick={handleClick}
                disabled={ttl <= 0}
                className="border bg-orange-500 hover:bg-orange-600 text-white rounded px-2 my-4"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
