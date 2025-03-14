const AddFood = () => {
  return (
    <div className="h-lvh flex justify-center">
      <form className="">
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
          <button className="border rounded bg-orange-400">
            Add Food Item
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddFood;
