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

//to get food category
export async function getFoodCategories(req, res) {
  try {
    const foodCategoryList = await FoodItem.find();
    const list = foodCategoryList.map((food) => food.category);
    console.log(list);
    const uniqueArray = list.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    res.status(200).json({ message: "Success", data: { uniqueArray } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Food category Not Found" });
  }
}

//get food by category
//http://localhost:8080/foods/category?category=pasta
export const getFoodByCategory = async (req, res) => {
  console.log(req.query.category, " query");
  try {
    const response = await FoodItem.find({ category: req.query.category });
    console.log(response);
    res.status(200).json({ message: "Success", data: { response } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Food category Not Found" });
  }
};

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
      .json({ message: "Food updated successfully", data: updateFoodItem });
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
    res.json({ message: "deleted successfully", response });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: " Item could not be deleted" });
  }
};
