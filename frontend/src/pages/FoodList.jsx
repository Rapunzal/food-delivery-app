import React, { useEffect } from "react";
import foodItemsStore from "../stores/FoodItemStores";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const FoodList = () => {
  let url = import.meta.env.VITE_API;
  const { foodItems, isLoading } = foodItemsStore();
  const getData = foodItemsStore((state) => state.fetchData);

  const foodList = foodItemsStore((state) => state.foodItems);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  if (!foodList.length) {
    return "Loading Food Items";
  }
  console.log(foodItems, " list foodList component");
  const deleteFoodItem = async (id) => {
    console.log("in delete", id);
    try {
      const response = await axios.delete(`${url}/foods/${id}`);
      console.log(response, "deleteFoodItem");
      if (response.statusText === "OK") {
        // const list_food = foodItems.filter((food) => food._id === id);
        getData();
        toast.success("Deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ml-[100px] w-full text-gray-600 py-10">
      <h2 className="text-center  text-xl">Inventory of Food Items</h2>
      <div className="flex justify-center py-8 ml-32 mr-32">
        <div>
          <div className="grid grid-cols-[.5fr_.5fr_1fr_.5fr_.5fr_0.5fr_0.5fr] gap-4  text-gray-700">
            <p>Items Image</p>
            <p>Title</p>
            <p>Description</p>
            <p>Price</p>
            <p>Category</p>
            <p>Update</p>
            <p>Delete</p>
          </div>
          <hr />
          {foodItems.map((item) => (
            <div key={item._id}>
              {
                <div
                  className="grid grid-cols-[.5fr_.5fr_1fr_.5fr_.5fr_0.5fr_0.5fr] gap-4 align-middle"
                  key={item._id}
                >
                  <div className="object-cover w-[100px] h-[100px]">
                    <img
                      src={`${url}/images/${item.image}`}
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <p>{item.category}</p>
                  <p>
                    <button
                      onClick={() =>
                        navigate("/admin/updateFood", {
                          state: {
                            itemId: item._id,
                          },
                        })
                      }
                      className="border rounded px-2 py-0 bg-orange-500 text-white hover:bg-orange-600"
                    >
                      Update
                    </button>
                  </p>
                  <p>
                    <RiDeleteBin6Line
                      onClick={() => deleteFoodItem(item._id)}
                      className=" w-4 h-4 cursor-pointer"
                    />
                  </p>
                  <Toaster />
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
