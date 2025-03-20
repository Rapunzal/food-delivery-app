import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    index: true, //Used index on category
  },
  image: {
    type: String,
    required: true,
  },
});

const FoodItem =
  mongoose.models.food || mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
