import React, { useState, useEffect } from "react";
import useCartStore from "../stores/CartStore";
import axios from "axios";
import userStore from "../stores/UserStore";
import toast, { Toaster } from "react-hot-toast";

//Food item component to display each food item as a card
const FoodItem = ({ food, index }) => {
  const { addItemToCart, removeItemFromCart, cartItems, setCartData } =
    useCartStore();
  const { user } = userStore.getState();
  const cartItem = useCartStore((state) => state.cartItems);
  const cartData = useCartStore((state) => state.cartData);

  const Url = "http://localhost:8080";
  // let Url = import.meta.env.VITE_API;
  const [quantity, setQuantity] = useState(0);

  function handleDecrement() {
    if (quantity < 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  }
  function handleIncrement(food) {
    setQuantity((prev) => prev + 1);
  }
  async function handleAddToCart(item) {
    addItemToCart(item);
    try {
      const response = await axios.put(`${Url}/carts/addToCart`, {
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
  }
  return (
    <div className=" w-[283px] h-80 border rounded-md relative" key={food._id}>
      <div>
        <img
          src={`${Url}/images/${food.image}`}
          className="w-[283px] h-40 object-cover"
        />
      </div>
      <div className="py-4 ml-4 text-gray-500 ">
        <h3 className="font-semibold">{food.name}</h3>
        <p className="font-extralight text-sm ">{food.description}</p>
        {/* <p>{food.category}</p> */}
        <p>Price: ${food.price}</p>
        <div className="flex justify-end mr-4">
          <button
            className="absolute bottom-3 rounded-full border right-4 text-l px-4 py-1 text-white bg-orange-500 hover:bg-orange-600"
            onClick={() => handleAddToCart(food)}
          >
            Add
          </button>
          <Toaster richColors />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
