import { addToCart } from "../controllers/cartController.js";
import express from "express";

const cartRouter = express.Router();

//add to cart
cartRouter.put("/addToCart", addToCart);

export default cartRouter;
