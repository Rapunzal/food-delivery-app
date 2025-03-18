import React from "react";
import useCartStore from "../stores/CartStore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    addItemToCart,
    removeItemFromCart,
    cartItems,
    deleteItemFromCart,
    cartTotal,
  } = useCartStore();

  

  const navigate = useNavigate();
  return (
    <div className="  flex justify-center ml-44 mr-44">
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
          {cartItems.map((item) => (
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
                      onClick={() => removeItemFromCart(item)}
                      className="px-1  bg-orange-500 rounded text-white"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => addItemToCart(item)}
                      className="px-1  bg-orange-500 rounded text-white"
                    >
                      +
                    </button>
                  </p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <p>
                    <button onClick={() => deleteItemFromCart(item)}>X</button>
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
