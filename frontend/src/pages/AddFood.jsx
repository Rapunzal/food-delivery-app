import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const AddFood = () => {
  let url = import.meta.env.VITE_API;
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
      const response = await axios.post(`${url}/foods/add`, formData);
      console.log(response, " response");
      console.log(formData);
      if (response.statusText === "Created") {
        toast.success("Food Item Created successfully");
      }
      form.reset(); // Reset the form after submission
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
    <div className="flex justify-center flex-col w-full pt-10">
      <h2 className="text-center  font-bold ">Add Food Item</h2>
      <div className="h-lvh flex justify-center ">
        <form
          onSubmit={handleSubmit}
          className=""
          encType="multipart/form-data"
        >
          <div className="m-4 flex">
            <div className="w-[150px]">
              <label className="w-52">Food Name : </label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Food Name"
                className="border rounded p-1"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="m-4 flex">
            <div className="w-[150px]">
              <label>Food Category : </label>
            </div>
            <div>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                placeholder="Enter Food Category"
                className="border rounded p-1"
              />
            </div>
          </div>
          <div className="m-4 flex">
            <div className="w-[150px]">
              <label>Food Description : </label>
            </div>
            <div>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                placeholder="Enter Food Description"
                className="border rounded p-1"
              />
            </div>
          </div>
          <div className="m-4 flex">
            <div className="w-[150px]">
              <label>Food Price : </label>
            </div>
            <div>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                placeholder="Enter Price"
                className="border rounded"
              />
            </div>
          </div>
          <div className="m-4">
            <label>Upload Food Image : </label>
            <input
              type="file"
              name="image"
              onClick={handleFileChange}
              accept="image/png, image/jpeg,image/webp,image/jpg"
              className="border rounded"
            />
          </div>
          <div className="m-4 flex">
            <div></div>
            <div>
              <button className="border rounded bg-orange-400 px-2 py-1 text-white hover:bg-orange-500  ">
                Add Food Item
              </button>
              <Toaster />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddFood;
