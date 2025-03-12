import express from "express";
import {
  getFoodItems,
  addFoodItem,
} from "../controllers/foodItemController.js";

const router = express.Router();

//Get list of all food items
router.get("/", getFoodItems);

//Post adding food item
router.post("/", addFoodItem);

export default router;
