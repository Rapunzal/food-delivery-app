import React, { useEffect } from "react";
import foodItemsStore from "../stores/FoodItemStores";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const FoodList = () => {
  const { foodItems, isLoading } = foodItemsStore();
  const getData = foodItemsStore((state) => state.fetchData);

  const foodList = foodItemsStore((state) => state.foodItems);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [getData]);

  if (!foodList.length) {
    return "Loading Food Items";
  }
  console.log(foodItems, " list foodList component");
  const deleteFoodItem = async (id) => {
    console.log("in delete", id);
    try {
      const response = await axios.delete(`http://localhost:8080/foods/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ml-[100px] w-full ">
      <h2 className="text-center underline">Inventory of Food Items</h2>
      <div className="flex justify-center py-8 ml-32 mr-32">
        <div>
          <div className="grid grid-cols-[.5fr_.5fr_1fr_.5fr_.5fr_0.5fr_0.5fr] gap-4  text-gray-500">
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
                    <button
                      onClick={() =>
                        navigate("/admin/updateFood", {
                          state: {
                            itemId: item._id,
                          },
                        })
                      }
                      className="border rounded px-1 py-0 bg-orange-400 text-white hover:bg-orange-500"
                    >
                      Update
                    </button>
                  </p>
                  <p>
                    <RiDeleteBin6Line
                      onClick={() => deleteFoodItem(item._id)}
                      className=" w-4 h-4"
                    />
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
