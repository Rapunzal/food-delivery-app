import React, { useEffect, useState } from "react";
import foodItemsStore from "../stores/FoodItemStores";
import FoodItem from "./FoodItem";
import { Category } from "./Category";
import axios from "axios";

const Menu = () => {
  const [category, setCategory] = useState("Appetizers/Starters");
  const [foodItemsByCategory, setFoodItemsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(null);

  async function getDataByCategory(category) {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/foods/category?category=${category}`
      );

      setFoodItemsByCategory(response.data.data.response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    //getData();
    getDataByCategory(category);
    console.log(foodItemsByCategory, "items by category");
  }, [category]);

  const handleClick = (cat, index) => {
    setCategory(cat);
    setIsActive(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-12 m-8">
        {Category.map((cat, index) => (
          <button
            onClick={() => handleClick(cat, index)}
            key={index}
            className="active:underline text-gray-500"
            // className={`
            //   ${isActive ? "bg-green-500" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex justify-center align-middle flex-wrap gap-12  py-8 ml-60 mr-60 ">
        {isLoading && <h1>Loading...</h1>}

        {foodItemsByCategory.map((food, index) => (
          <FoodItem food={food} index={index} key={food._id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
