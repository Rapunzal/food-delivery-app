import React from "react";
import useCartStore from "../stores/CartStore";

const Cart = () => {
  const { addItemToCart, removeItemFromCart, cartItems, deleteItemFromCart } =
    useCartStore();
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex justify-center gap-24">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {cartItems.map((item) => (
          <>
            {item.quantity > 0 && (
              <div className="flex justify-center gap-24" key={item._id}>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.quantity}</p>
                <p>${item.price * item.quantity}</p>
                <p>
                  <button onClick={() => deleteItemFromCart(item)}>X</button>
                </p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Cart;
