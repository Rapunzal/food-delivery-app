const AddFood = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="text-center pt-20 font-bold ">Add Food Item</h2>
      <div className="h-lvh flex justify-center ">
        <form onSubmit={handleSubmit} className="">
          <div>
            <label>Food Name : </label>
            <input
              type="text"
              placeholder="Enter Food Name"
              className="border rounded"
            />
          </div>
          <div>
            <label>Food Category : </label>
            <input
              type="text"
              placeholder="Enter Food Category"
              className="border rounded"
            />
          </div>
          <div>
            <label>Food Description : </label>
            <input
              type="text"
              placeholder="Enter Food Description"
              className="border rounded"
            />
          </div>
          <div>
            <label>Food Price : </label>
            <input
              type="text"
              placeholder="Enter Price"
              className="border rounded"
            />
          </div>
          <div>
            <label>Upload Food Image : </label>
            <input type="image" className="border rounded" />
          </div>
          <div>
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
