import express from "express";
import multer from "multer";
import {
  getFoodItems,
  addFoodItem,
  deleteFoodItem,
  updateFoodItem,
  getFoodCategories,
  getFoodByCategory,
} from "../controllers/foodItemController.js";

const router = express.Router();

//Get list of all food items
router.get("/", getFoodItems);

//Get list of all food categories list
router.get("/categories", getFoodCategories);

//Get list of all food items in a particular category
router.get("/category", getFoodByCategory);

const storage = multer.diskStorage({
  destination: "uploads",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//Post adding food item
router.post("/add", upload.single("image"), addFoodItem);



//Updating food item
router.put("/:id", updateFoodItem);

//Delete Food item
router.delete("/:id", deleteFoodItem);

export default router;
