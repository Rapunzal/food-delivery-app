import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    cart: {
      type: Object,
      required: true,
      default: {},
    },
  },
  { minimize: false }
);

const User =
  delete mongoose.connection.models["User"] &&
  mongoose.model("User", userSchema);

export default User;
