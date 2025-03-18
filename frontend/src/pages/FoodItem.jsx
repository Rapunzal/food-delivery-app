import React, { useState, useEffect } from "react";
import useCartStore from "../stores/CartStore";
import axios from "axios";
import userStore from "../stores/UserStore";

const FoodItem = ({ food, index }) => {
  const { addItemToCart, removeItemFromCart, cartItems } = useCartStore();
  const { user } = userStore.getState();
  const cartItem = useCartStore((state) => state.cartItems);
  // console.log(cartItems[0], " in food item component");
  const Url = "http://localhost:8080/";
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
      const response = await axios.put(`${Url}carts/addToCart`, {
        user,
        id: item._id,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=" w-[283px] h-80 border rounded-md relative" key={food._id}>
      <div>
        <img
          src={`http://localhost:8080/images/${food.image}`}
          className="w-[283px] h-40 aspect-auto overflow-hidden"
        />
      </div>
      <div className="py-4 ml-4">
        <h3 className="font-bold">{food.name}</h3>
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
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
