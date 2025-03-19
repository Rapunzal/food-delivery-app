import User from "../models/userModel.js";

//add to cart functionality
export const addToCart = async (req, res) => {
  console.log(req.body.item._id);
  try {
    const userDoc = await User.findOne({
      _id: req.body.user.id,
    });
    // console.log(userDoc, " userdoc");
    let cartDoc = await userDoc.cart;

    console.log(cartDoc, " cartDoc");
    console.log(req.body.item._id);

    //find the food item by id in cartDoc
    let cart_result = cartDoc.find((c) => c._id === req.body.item._id);
    console.log(cart_result, " before");
    if (!cart_result) {
      cart_result = req.body.item;
      cart_result.quantity = 1;
      cartDoc = [...cartDoc, cart_result];
    } else {
      cart_result.quantity += 1;
    }
    console.log(cart_result, " after");

    const result = await User.findByIdAndUpdate(
      req.body.user.id,
      {
        $set: { cart: [...cartDoc] },
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

    //find the food item by id in cartDoc
    let cart_result = cartDoc.find((c) => c._id === req.body.item._id);

    if (cart_result.quantity === 1) {
      let newCart = cartDoc.filter((c) => c._id !== req.body.item._id);
      cartDoc = [...newCart];
    } else {
      cart_result.quantity -= 1;
    }

    console.log(cartDoc, "===after remove cartdoc value");
    const result = await User.findByIdAndUpdate(
      req.body.user.id,
      {
        $set: { cart: [...cartDoc] },
      },
      { new: true }
    );
    console.log(result, " result");
    res.json({ success: true, message: "removed from cart", cart: result });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not able to remove from cart" });
  }
};

//Remove from cart functionality
export const deleteFromCart = async (req, res) => {
  try {
    const userDoc = await User.findOne({
      _id: req.body.user.id,
    });
    // console.log(userDoc, " userdoc");
    let cartDoc = await userDoc.cart;

    //find the food item by id in cartDoc
    let cart_result = cartDoc.find((c) => c._id === req.body.item._id);

    let newCart = cartDoc.filter((c) => c._id !== req.body.item._id);
    cartDoc = [...newCart];

    console.log(cartDoc, "===after remove cartdoc value");
    const result = await User.findByIdAndUpdate(
      req.body.user.id,
      {
        $set: { cart: [...cartDoc] },
      },
      { new: true }
    );
    console.log(result, " result");
    res.json({ success: true, message: "removed from cart", cart: result });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not able to remove from cart" });
  }
};

//Get user cart
export const getCart = async (req, res) => {
  try {
    console.log(req.body, " req body");
    const userDoc = await User.findOne({ _id: req.body.id });
    //console.log(userDoc, " userdoc in getCart----");
    let cartDoc = await userDoc.cart;
    console.log(cartDoc, " cartDoc");
    res.json({ success: true, message: "cart data", cart: cartDoc });
  } catch (error) {
    console.log(error);
  }
};
