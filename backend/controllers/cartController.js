import User from "../models/userModel.js";

//add to cart functionality
export const addToCart = async (req, res) => {
  try {
    const userDoc = await User.findOne({
      _id: req.body._id,
    });
    const cartDoc = await User.cart;
    console.log(cartDoc, " cartDoc");
    console.log(req.body.item._id);
    console.log(cartDoc[req.body.item._id]);
    if (!cartDoc) {
      cartDoc[req.body.item._id].quantity = 1;
    } else {
      cartDoc[req.body._id].quantity += 1;
    }
    await User.findByIdAndUpdate(req.body._id, { cartDoc });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not able to add to cart" });
  }
};
