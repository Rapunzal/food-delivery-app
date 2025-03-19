import { useEffect } from "react";
import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],
  cartData: [],
  orderId: "",
  setOrderId: (orderId) => set({ orderId }),
  setCartData: (cartData) => set({ cartData }),
  addItemToCart: (item) => {
    console.log("in cart store add to cart");
    const itemExists = get().cartItems.find(
      (cartItems) => cartItems._id === item._id
    );
    if (itemExists) {
      itemExists.quantity++;
      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
      // console.log(cartItems, " cartItems");
    }
  },
  removeItemFromCart: (item) => {
    const itemExists = get().cartItems.find(
      (cartItems) => cartItems._id === item._id
    );
    if (itemExists && itemExists.quantity > 0) {
      itemExists.quantity--;
      set({ cartItems: [...get().cartItems] });
    } else {
      //  set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
  // deleteItemFromCart: (item) => {
  //   const itemToBeRemoved = get().cartItems.find(
  //     (cart) => cart._id === item._id
  //   );

  //   if (itemToBeRemoved.quantity) {
  //     set({
  //       cartItems: get().cartItems.filter(
  //         (cartItem) => cartItem._id !== item._id
  //       ),
  //     });
  //   }
  // },
  cartTotal: () => {
    return get()
      .cartData.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0)
      .toFixed(2);
  },
}));

export default useCartStore;
