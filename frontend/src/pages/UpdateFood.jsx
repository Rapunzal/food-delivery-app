import React, { useState } from "react";
import foodItemsStore from "../stores/FoodItemStores";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

//Admin page to update food item
const UpdateFood = () => {
  let url = "http://localhost:8080";
  const location = useLocation();
  // get userId
  let itemId = location.state.itemId;
  const foodList = foodItemsStore((state) => state.foodItems);
  const food = foodList.find((food) => food._id === itemId);
  const [item, setItem] = useState(food);
  const [updatedFood, setUpdatedFood] = useState({
    name: item.name,
    category: item.category,
    description: item.description,
    price: item.price,
  });

  const handleSubmit = async (event, id) => {
    event.preventDefault();

    try {
      const response = await axios.put(`${url}/foods/${id}`, updatedFood);
      console.log(response, " response");

      if (response.statusText === "OK") {
        toast.success("Food Item updated successfully");
        setUpdatedFood({
          name: "",
          category: "",
          description: "",
          price: 0,
        });
      }
      // form.reset(); // Reset the form after submission
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedFood((prevFood) => ({ ...prevFood, [name]: value }));
  };
  const handleFileChange = () => {};
  return (
    <div className="flex justify-center w-full pt-20">
      <div className="h-lvh flex justify-center ">
        {/* <h2 className="text-center  font-bold ">Add Food Item</h2> */}

        <form
          onSubmit={(event) => handleSubmit(event, item._id)}
          className=""
          encType="multipart/form-data"
        >
          <div className="m-4">
            <label>Food Name : </label>
            <input
              type="text"
              name="name"
              value={updatedFood.name}
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
              value={updatedFood.category}
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
              value={updatedFood.description}
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
              value={updatedFood.price}
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
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
