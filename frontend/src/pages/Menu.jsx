import React, { useEffect, useState } from "react";
import foodItemsStore from "../stores/FoodItemStores";
import FoodItem from "./FoodItem";

const Menu = () => {
  
  const { foodItems, fetchData, isLoading } = foodItemsStore();
  const getData = foodItemsStore((state) => state.fetchData);
  const list = foodItemsStore((state) => state.foodItems);
  console.log(foodItems, " in menu--");
  useEffect(() => {
    getData();
  }, [getData]);
  if (!list.length) {
    return "Loading";
  }

  return (
    <div className="flex justify-center align-middle flex-wrap gap-12  py-8 ml-60 mr-60 ">
      {isLoading && <h1>Loading...</h1>}

      {foodItems.map((food) => (
        <FoodItem food={food} />
      ))}
    </div>
  );
};

export default Menu;
