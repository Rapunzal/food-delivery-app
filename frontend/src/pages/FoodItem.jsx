import React, { useState, useEffect } from "react";
import useCartStore from "../stores/CartStore";

const FoodItem = ({ food }) => {
  const { addItemToCart, removeItemFromCart, cartItems } = useCartStore();
  const cartItem = useCartStore((state) => state.cartItems);
  console.log(cartItems.name, " in food item component");
  const [quantity, setQuantity] = useState(cartItems.quantity);

  function handleDecrement() {
    if (quantity < 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  }
  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }
  return (
    <div className=" w-[283px] h-80 border rounded-md " key={food._id}>
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
          <div className="rounded-full border border-gray-200  w-24  h-10 relative ">
            {/* absolute  bottom-2 right-0 */}
            <button
              className="absolute bottom-1 left-4 text-2xl "
              onClick={() => removeItemFromCart(food)}
            >
              -{/* //absolute bottom-2 right-14 - px-2 py-1 */}
            </button>
            <p className=" absolute bottom-2 left-8 rounded-full bg-red-500 w-6 h-6 text-center text-white  ">
              {/* absolute bottom-2 right-10 px-2 py-1*/}
              {cartItem.quantity}
            </p>
            <button
              className="absolute bottom-1 right-4 text-2xl"
              onClick={() => addItemToCart(food)}
            >
              {/* absolute bottom-2 right-4 px-2 py-1 */}+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
