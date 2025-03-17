import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  cartItems: {
    type: Array,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  payment: {
    type: Boolean,
    default: false,
  },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
