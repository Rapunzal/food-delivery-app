import axios from "axios";
import React, { useState } from "react";

const AddFood = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [food, setFood] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    console.log(selectedFile);
    formData.append("image", selectedFile);

    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8080/foods/add",
        formData
      );
      console.log(response, " response");
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({ ...prevFood, [name]: value }));
  };
  const handleFileChange = (e) => {
    console.log(e.target.files[0], "---------");
    //setFood((prevFood) => ({ ...prevFood, image: e.target.files[0] }));
    setSelectedFile(e.target.files[0]);
  };
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
              value={food.name}
              name="name"
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
              onChange={handleChange}
              placeholder="Enter Food Description"
              className="border rounded p-1"
            />
          </div>
          <div className="m-4">
            <label>Food Price : </label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              placeholder="Enter Price"
              className="border rounded"
            />
          </div>
          <div className="m-4">
            <label>Upload Food Image : </label>
            <input
              type="file"
              name="image"
              onClick={handleFileChange}
              accept="image/png, image/jpeg"
              className="border rounded"
            />
          </div>
          <div className="m-4">
            <button className="border rounded bg-orange-400 px-2 py-1 text-white hover:bg-orange-500  ">
              Add Food Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddFood;
