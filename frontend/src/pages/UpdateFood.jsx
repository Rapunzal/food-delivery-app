import React, { useState } from "react";
import foodItemsStore from "../stores/FoodItemStores";
import { useLocation } from "react-router-dom";

//Admin page to update food item
const UpdateFood = () => {
  const location = useLocation();
  // get userId
  let itemId = location.state.itemId;
  const foodList = foodItemsStore((state) => state.foodItems);
  const food = foodList.find((food) => food._id === itemId);
  const [item, setItem] = useState(food);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleFileChange = () => {};
  return (
    <div className="flex justify-center w-full pt-20">
      <div className="h-lvh flex justify-center ">
        {/* <h2 className="text-center  font-bold ">Add Food Item</h2> */}

        <form
          onSubmit={handleSubmit}
          className=""
          encType="multipart/form-data"
        >
          <div className="m-4">
            <label>Food Name : </label>
            <input
              type="text"
              name="name"
              value={item.name}
              placeholder="Enter Food Name"
              className="border rounded p-1"
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label>Food Category : </label>
            <input
              type="text"
              name="category"
              value={item.category}
              onChange={handleChange}
              placeholder="Enter Food Category"
              className="border rounded p-1"
            />
          </div>
          <div className="m-4">
            <label>Food Description : </label>
            <input
              type="text"
              name="description"
              value={item.description}
              onChange={handleChange}
              placeholder="Enter Food Description"
              className="border rounded p-1"
            />
          </div>
          <div className="m-4">
            <label>Food Price : </label>
            <input
              type="text"
              name="price"
              value={item.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="border rounded"
            />
          </div>
          {/* <div className="m-4">
            <label>Upload Food Image : </label>
            <input
              type="file"
              name="image"
              onClick={handleFileChange}
              accept="image/png, image/jpeg"
              className="border rounded"
            />
          </div> */}
          <div className="m-4">
            <button className="border rounded bg-orange-400 px-2 py-1 text-white hover:bg-orange-500  ">
              Update Food Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
