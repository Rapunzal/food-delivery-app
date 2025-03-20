import { create } from "zustand";
import axios from "axios";
//let url = import.meta.env.VITE_API;
let url = "http://localhost:8080";
const foodItemsStore = create((set) => ({
  foodItems: [],
  foodItemsByCategory: [],
  isLoading: false,
  error: null,
  categoryStore: "Appetizers/Starters",
  setCategoryStore: (categoryStore) => set({ categoryStore }),
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${url}/foods/`);
      // const food = result;
      console.log(response.data.data.foodItems);
      set({ foodItems: response.data.data.foodItems });
    } catch (error) {
      console.log(error);
      set({ error: error });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchDataByCategory: async (categoryStore) => {
    console.log(categoryStore, "in store by category");
    set({ isLoading: true });
    try {
      const response = await axios.get(
        `${url}/foods/category?category=${categoryStore}`
      );
      // const food = result;
      console.log(response, " in category");
      set({ foodItemsByCategory: response.data.data.response });
    } catch (error) {
      console.log(error);
      set({ error: error });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default foodItemsStore;
