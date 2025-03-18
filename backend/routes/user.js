import express from "express";
import { getUsers, signUp, login } from "../controllers/userController.js";

const router = express.Router();

//Get list of all users route
router.get("/", getUsers);

router.post("/login", login);

router.post("/signUp", signUp);

export default router;
