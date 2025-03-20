import OrderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//Place order
export const placeOrder = async (req, res) => {
  try {
    const newOrder = new OrderModel({
      userId: req.body.userId,
      cartItems: req.body.cartItems,
      totalAmount: req.body.totalAmount,
      address: req.body.address,
    });
    const response = await newOrder.save();
    console.log(response);
    await userModel.findByIdAndUpdate(req.body.userId, { cart: [] });
    res.json({ response });
  } catch (error) {
    res.status(400).send({ msg: "error" });
  }
};
