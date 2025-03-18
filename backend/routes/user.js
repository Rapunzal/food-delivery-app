import express from "express";
import { getUsers, signUp, login } from "../controllers/userController.js";

const router = express.Router();

//Get list of all users route
router.get("/", getUsers);

//User Login route
router.post("/login", login);

//User signup route
router.post("/signUp", signUp);

export default router;
