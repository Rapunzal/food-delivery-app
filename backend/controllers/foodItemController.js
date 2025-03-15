import FoodItem from "../models/foodItemModel.js";
import fs from "fs";

export async function getFoodItems(req, res) {
  try {
    const foodItems = await FoodItem.find({});
    console.log(foodItems);
    res.status(200).json({ message: "Success", data: { foodItems } });
  } catch (error) {
    res.status(400).json({ error: "Food item Not Found" });
  }
}

export const addFoodItem = async (req, res) => {
  console.log(req.file);
  let imgFileName = `${req.file.filename}`;
  console.log(imgFileName, " image name");
  console.log(req.body.description);
  try {
    const newFoodItem = new FoodItem({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    console.log(newFoodItem);
    await newFoodItem.save();
    console.log(newFoodItem);
    res.status(201).send("food item added successfully");
  } catch (error) {
    res.status(400).json({ error: "Food item cannot be added" });
  }
};

export const deleteFoodItem = async (req, res) => {
  try {
    const item = await FoodItem.findById(req.params.id);
    fs.unlink(`uploads/${item.image}`, () => {});
    const response = await FoodItem.findByIdAndDelete(req.params.id);
    console.log("Deleted successfully");
    res.json("deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: " Item could not be deleted" });
  }
};
