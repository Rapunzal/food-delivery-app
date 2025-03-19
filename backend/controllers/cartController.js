import User from "../models/userModel.js";

//add to cart functionality
export const addToCart = async (req, res) => {
  //console.log(req.body);
  try {
    const userDoc = await User.findOne({
      _id: req.body.user.id,
    });
    // console.log(userDoc, " userdoc");
    let cartDoc = await userDoc.cart;

    console.log(cartDoc, " cartDoc");
    console.log(req.body.id);

    // if (!cartDoc[req.body.id]) {
    //   cartDoc[req.body.id] = 1;
    // } else {
    //   cartDoc[req.body.id] += 1;
    // }

    if (!cartDoc[req.body.id]) {
      cartDoc[req.body.id] = 1;
    } else {
      cartDoc[req.body.id] += 1;
    }
    console.log(cartDoc, "===after cartdoc value");
    const result = await User.findByIdAndUpdate(
      req.body.user.id,
      {
        $set: { cart: cartDoc },
      },
      { new: true }
    );
    console.log(result, " result");
    res.json({ success: true, message: "added to cart", data: result });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not able to add to cart" });
  }
};

//Remove from cart functionality
export const removeFromCart = async (req, res) => {
  try {
    const userDoc = await User.findOne({
      _id: req.body.user.id,
    });
    // console.log(userDoc, " userdoc");
    let cartDoc = await userDoc.cart;
    console.log("before if", cartDoc);
    console.log("req body f", req.body);
    if (cartDoc[req.body.item._id] === 1) {
      delete cartDoc[req.body.item._id];
    } else if (cartDoc[req.body.item._id] > 1) {
      console.log("if", cartDoc[req.body.item._id]);
      cartDoc[req.body.item._id] -= 1;
    }
    console.log(cartDoc, "===after remove cartdoc value");
    const result = await User.findByIdAndUpdate(
      req.body.user.id,
      {
        $set: { cart: cartDoc },
      },
      { new: true }
    );
    console.log(result, " result");
    res.json({ success: true, message: "removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not able to remove from cart" });
  }
};
