import React, { useEffect, useState } from "react";
import foodItemsStore from "../stores/FoodItemStores";
import FoodItem from "./FoodItem";
import { Category } from "./Category";

const Menu = () => {
  const [category, setCategory] = useState("Appetizers/Starters");
  let {
    foodItems,
    isLoading,
    foodItemsByCategory,
    fetchDataByCategory,
    categoryStore,
    setCategoryStore,
  } = foodItemsStore();
  const getDataByCategory = foodItemsStore(
    (state) => state.fetchDataByCategory
  );
  const list = foodItemsStore((state) => state.foodItemsByCategory);

  useEffect(() => {
    //getData();
    getDataByCategory(categoryStore);
    console.log(foodItemsByCategory, "items by category");
  }, [getDataByCategory, category, categoryStore]);
  // if (!list.length) {
  //   return "Loading";
  // }

  const handleClick = (cat) => {
    setCategory(cat);
    setCategoryStore(category);
    console.log(categoryStore, " category store");
  };
  //data by category
  // useEffect(() => {}, [getDataByCategory, category]);
  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-12 m-8">
        {Category.map((cat) => (
          <button onClick={() => handleClick(cat)} key={cat}>
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
