import { useEffect } from "react";
import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],

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
  deleteItemFromCart:(item)=>{
    
  }
}));

export default useCartStore;
