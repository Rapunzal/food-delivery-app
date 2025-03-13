import express from "express";
import multer from "multer";
import {
  getFoodItems,
  addFoodItem,
  deleteFoodItem,
} from "../controllers/foodItemController.js";

const router = express.Router();

//Get list of all food items
router.get("/", getFoodItems);

const storage = multer.diskStorage({
  destination: "uploads",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//Post adding food item
router.post("/add", upload.single("image"), addFoodItem);

//Delete Food item
router.delete("/:id", deleteFoodItem);

export default router;
