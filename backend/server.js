import express from "express";

const port = "8080";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("hello");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
