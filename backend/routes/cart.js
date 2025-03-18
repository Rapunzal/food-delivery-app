import { addToCart, removeFromCart } from "../controllers/cartController.js";
import express from "express";

const cartRouter = express.Router();

//add to cart
cartRouter.put("/addToCart", addToCart);

//Remove from cart
cartRouter.put("/removeFromCart", removeFromCart);

export default cartRouter;
