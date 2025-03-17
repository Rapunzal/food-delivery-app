import express from "express";
import connectDB from "./database/db.js";
import "dotenv/config";
import cors from "cors";
import router from "./routes/user.js";
import food from "./routes/foodItem.js";
import orderRouter from "./routes/order.js";

const port = "8080";
const app = express();
// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/users", router);
app.use("/foods", food);
app.use("/orders", orderRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).json("hello");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDB();
});
