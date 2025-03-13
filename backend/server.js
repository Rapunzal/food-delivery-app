import express from "express";
import connectDB from "./database/db.js";
import "dotenv/config";
import cors from "cors";
import router from "./routes/user.js";
import food from "./routes/foodItem.js";

const port = "8080";
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/users", router);
app.use("/foods", food);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).json("hello");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDB();
});
