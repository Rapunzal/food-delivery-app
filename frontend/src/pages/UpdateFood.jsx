import React from "react";

const UpdateFood = () => {
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
              type="text"
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

export default UpdateFood;
