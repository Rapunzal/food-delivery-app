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

    // if (!cartDoc[req.body.id]) {
    //   cartDoc[req.body.id] = 1;
    // } else {
    //   cartDoc[req.body.id] += 1;
    // }

    //find the food item by id in cartDoc
    let cart_result = cartDoc.find((c) => c._id === req.body.item._id);
    console.log(cart_result, " before");
    if (!cart_result) {
      cart_result = req.body.item;
      cart_result.quantity = 1;
      cartDoc = [...cartDoc, cart_result];
      //set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    } else {
      cart_result.quantity += 1;
      // itemExists.quantity++;
      // set({ cartItems: [...get().cartItems] });
    }
    console.log(cart_result.quantity, " after");
    // if (!cartDoc) {
    //   cartDoc[req.body.id] = 1;
    // } else {
    //   cartDoc[req.body.id] += 1;
    // }
    // console.log(cartDoc, "===after cartdoc value");
    // const result = await User.findByIdAndUpdate(
    //   req.body.user.id,
    //   {
    //     $set: [{ cart: cartDoc }],
    //   },
    //   { new: true }
    // );
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
