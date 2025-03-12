import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  image: {
    type: Buffer,
  },
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
