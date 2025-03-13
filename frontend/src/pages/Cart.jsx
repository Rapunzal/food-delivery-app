import React from "react";

const Cart = () => {
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
      </div>
    </div>
  );
};

export default Cart;
