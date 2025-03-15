import React, { useEffect } from "react";
import foodItemsStore from "../stores/FoodItemStores";

const FoodList = () => {
  const { foodItems, isLoading } = foodItemsStore();
  const getData = foodItemsStore((state) => state.fetchData);
  const foodList = foodItemsStore((state) => state.foodItems);
  console.log(foodItems, " in menu--");
  useEffect(() => {
    getData();
  }, [getData]);
  if (!foodList.length) {
    return "Loading Food Items";
  }
  console.log(foodItems, " list foodList component");
  return (
    <div className="ml-[100px]">
      <h2 className="text-center underline">List Of Food Items</h2>
      <div className="flex justify-center py-8 ml-32 mr-32">
        <div>
          <div className="grid grid-cols-[.5fr_.5fr_1fr_.5fr_.5fr_0.5fr] gap-4  text-gray-500">
            <p>Items Image</p>
            <p>Title</p>
            <p>Description</p>
            <p>Price</p>
            <p>Category</p>
            <p>Remove</p>
          </div>
          <hr />
          {foodItems.map((item) => (
            <div key={item._id}>
              {
                <div
                  className="grid grid-cols-[.5fr_.5fr_1fr_.5fr_.5fr_0.5fr] gap-4 align-middle"
                  key={item._id}
                >
                  <img
                    src={`http://localhost:8080/images/${item.image}`}
                    width="100px"
                    height="100px"
                  />
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <p>{item.category}</p>
                  <p>
                    <button onClick={() => deleteItemFromCart(item)}>X</button>
                  </p>
                </div>
              }
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodList;
