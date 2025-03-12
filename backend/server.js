import express from "express";
import connectDB from "./database/db.js";
import "dotenv/config";

const port = "8080";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("hello");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDB();
});
