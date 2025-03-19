import {
  addToCart,
  removeFromCart,
  deleteFromCart,
  getCart,
} from "../controllers/cartController.js";
import express from "express";

const cartRouter = express.Router();

//add to cart
cartRouter.put("/addToCart", addToCart);

//Remove from cart
cartRouter.put("/removeFromCart", removeFromCart);

//Delete from cart
cartRouter.put("/deleteFromCart", deleteFromCart);

//Get cart route
cartRouter.post("/getCart", getCart);

export default cartRouter;
