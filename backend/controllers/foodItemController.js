import FoodItem from "../models/foodItemModel.js";
import fs from "fs";

//Food item controller for getting food items list
export async function getFoodItems(req, res) {
  try {
    const foodItems = await FoodItem.find({});
    console.log(foodItems);
    res.status(200).json({ message: "Success", data: { foodItems } });
  } catch (error) {
    res.status(400).json({ error: "Food item Not Found" });
  }
}

//Posting food item
export const addFoodItem = async (req, res) => {
  console.log(req.file);
  let imgFileName = `${req.file.filename}`;
  console.log(imgFileName, " image name");
  console.log(req.body, " request body");
  console.log(req.body.name, " request body name");
  try {
    const newFoodItem = new FoodItem({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: imgFileName,
    });
    console.log(newFoodItem, " new food item---");
    await newFoodItem.save();
    console.log(newFoodItem);
    res.status(201).send("food item added successfully");
  } catch (error) {
    res.status(400).json({ error: "Food item cannot be added" });
  }
};

//Updating food item
export const updateFoodItem = async (req, res) => {
  try {
    const updatedFoodItem = await FoodItem.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res
      .status(200)
      .json({ message: "User updated successfully", data: updateFoodItem });
  } catch (error) {
    console.log(error);
  }
};

//Deleting Food item
export const deleteFoodItem = async (req, res) => {
  const index = `${req.params.id}`;
  console.log(index, " index");
  try {
    const item = await FoodItem.findById({ _id: req.params.id });
    fs.unlink(`uploads/${item.image}`, () => {});
    const response = await FoodItem.findByIdAndDelete({ _id: req.params.id });
    console.log("Deleted successfully");
    res.json("deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: " Item could not be deleted" });
  }
};
