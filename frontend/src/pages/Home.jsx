import React, { useEffect } from "react";
import Header from "../components/Header";
import foodItemsStore from "../stores/FoodItemStores.jsx";
import axios from "axios";
import Menu from "./Menu.jsx";

const Home = () => {
  // const { foodItems, setFoodItems } = foodItemsStore.getState();

  // // useEffect(() => {
  // //   getFoodItemsList();
  // // }, []);
  // console.log(foodItems, " fooditems====");
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
};

export default Home;
