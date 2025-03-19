import React from "react";
import useCartStore from "../stores/CartStore";
import { useNavigate } from "react-router-dom";
import userStore from "../stores/UserStore";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import foodItemsStore from "../stores/FoodItemStores";

const Cart = () => {
  const Url = "http://localhost:8080/";
  const { user } = userStore.getState();
  //  const { foodItems } = foodItemsStore.getState();
  const foodItems = foodItemsStore((state) => state.foodItems);
  const {
    addItemToCart,
    removeItemFromCart,
    cartItems,
    deleteItemFromCart,
    cartTotal,
    setCartData,
  } = useCartStore();
  const cartData = useCartStore((state) => state.cartData);
  const handleRemoveFromCart = async (item) => {
    removeItemFromCart(item);
    toast.success("Removed");
    try {
      const response = await axios.put(`${Url}carts/removeFromCart`, {
        user,
        item,
      });
      // console.log(response.data.data.cart, " add to cart");
      // setCartData(response.data.data.cart);
      console.log(cartData, " cart data");
    } catch (error) {
      console.log(error);
    }
  };
  const incrementQuantity = async (item) => {
    console.log(cartData);

    addItemToCart(item);
    try {
      const response = await axios.put(`${Url}carts/addToCart`, {
        user,
        item: item,
      });
      console.log(response.data.data.cart, " add to cart");
      setCartData(response.data.data.cart);
      console.log(cartData, " cart data");
      if (response.statusText === "OK") {
        toast.success("Added to cart.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (item) => {
    deleteItemFromCart(item);
    toast.success("Removed");
  };
  const navigate = useNavigate();
  return (
    <div className="  flex justify-center w-full ml-44 mr-44">
      <div className="flex justify-center py-8">
        <div>
          <div>
            <h2 className="text-center font-bold">Cart </h2>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 align-middle text-gray-500">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {cartData.map((item) => (
            <div key={item._id}>
              {item.quantity > 0 && (
                <div
                  className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 align-middle"
                  key={item._id}
                >
                  <img
                    src={`http://localhost:8080/images/${item.image}`}
                    width="100px"
                    height="100px"
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="px-1  bg-orange-500 rounded text-white"
                    >
                      -
                    </button>
                    <span className="p-2">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item)}
                      className="px-1  bg-orange-500 rounded text-white"
                    >
                      +
                    </button>
                    <Toaster />
                  </p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <p>
                    <button onClick={() => handleDelete(item)}>X</button>
                  </p>
                </div>
              )}
              <hr />
            </div>
          ))}
          <div className="flex justify-end">Sub Total : ${cartTotal()}</div>
          <div className="flex justify-end">
            <button
              disabled={Number(cartTotal()) <= 0}
              className="bg-orange-500 disabled:bg-orange-300 px-2 py-1 text-white rounded-full hover:bg-orange-600"
              onClick={() => navigate("/order")}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
