import React, { useEffect, useState } from "react";
import foodItemsStore from "../stores/FoodItemStores";

const Menu = () => {
  const [quantity, setQuantity] = useState(0);
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
        <div className=" w-[283px] h-80 border rounded-md " key={food._id}>
          <div>
            <img
              src={`http://localhost:8080/images/${food.image}`}
              className="w-[283px] h-40 aspect-auto overflow-hidden"
            />
          </div>
          <div className="py-4 ml-4">
            <h3 className="font-bold">{food.name}</h3>
            <p className="font-extralight text-sm ">{food.description}</p>
            {/* <p>{food.category}</p> */}
            <p>Price: ${food.price}</p>
            <div className="flex justify-end">
              <div className="rounded-full border border-black bg-slate-100 w-24  h-10 relative">
                {/* absolute  bottom-2 right-0 */}
                <button className="absolute bottom-2 left-4  ">
                  -{/* //absolute bottom-2 right-14 - px-2 py-1 */}
                </button>
                <p className=" absolute bottom-2 left-9 rounded-full bg-red-500 w-6 h-6 text-center text-white  ">
                  {/* absolute bottom-2 right-10 px-2 py-1*/}
                  {quantity}
                </p>
                <button className="absolute bottom-2 right-4">
                  {/* absolute bottom-2 right-4 px-2 py-1 */}+
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
