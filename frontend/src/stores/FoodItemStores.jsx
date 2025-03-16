import { create } from "zustand";
import axios from "axios";

const foodItemsStore = create((set) => ({
  foodItems: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("http://localhost:8080/foods/");
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
}));

export default foodItemsStore;
