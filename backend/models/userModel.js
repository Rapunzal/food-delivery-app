import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  cart: {
    type: Object,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
