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
      type: Array,
      required: true,
      default: [
        {
          id: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          category: {
            type: String,
            required: true,
            index: true,
          },
          image: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            default: 0,
          },
        },
      ],
    },
    // cart: {
    //   type: Object,
    //   required: true,
    //   default: {},
    // },
  },
  { minimize: false }
);

const User =
  delete mongoose.connection.models["User"] &&
  mongoose.model("User", userSchema);

export default User;
