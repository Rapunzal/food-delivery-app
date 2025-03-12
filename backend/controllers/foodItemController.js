import FoodItem from "../models/foodItemModel.js";

export async function getFoodItems(req, res) {
  try {
    const foodItemList = await FoodItem.find({});
    console.log(foodItemList);
    res.status(200).json({ message: "Success", data: { foodItemList } });
  } catch (error) {
    res.status(400).json({ error: "Food item Not Found" });
  }
}

export const addFoodItem = async (req, res) => {
  try {
    const newFoodItem = new FoodItem({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    await newFoodItem.save();
    console.log(newFoodItem);
    res.status(201).send("food item added successfully");
  } catch (error) {
    res.status(400).json({ error: "Food item cannot be added" });
  }
};
