import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function getUsers(req, res) {
  try {
    const userList = await User.find({});
    console.log(userList[0]);
    res.status(200).json({ message: "Success", data: { userList } });
  } catch (error) {
    res.status(404).json({ error: "User Not Found" });
  }
}

//SignUp
export async function signUp(req, res) {
  console.log(req.body, " body in sigup");
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  try {
    console.log(req.body, " body in sigup");
    req.body.cart = [];
    const newUser = await User.create(req.body);
    console.log(newUser, " new user");
    let payload = {
      email: newUser.email,
      id: newUser._id,
      role: newUser.role,
    };
    const token = jwt.sign(payload, process.env.JWT_Key, { expiresIn: "3d" });
    res.send({
      email: newUser.email,
      id: newUser._id,
      role: newUser.role,
      name: newUser.name,
      cart: [],
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json("Cannot Create user account");
  }
}

//Login
export async function login(req, res) {
  let { email, password } = req.body;
  console.log(email);
  try {
    const userDoc = await User.findOne({ email: email });
    console.log(userDoc.email, "====userdoc");
    if (!userDoc) {
      res.status.send({ error: "User or password do not match" });
    }
    let isPasswordValid = await bcrypt.compare(password, userDoc.password);
    if (!isPasswordValid) {
      res.status(400).json({ error: "Wrong Password" });
    }
    console.log("User doc ", userDoc);
    console.log("Upassword ", password);
    console.log("User doc.password ", userDoc.password);
    let payload = { email: userDoc.email, id: userDoc._id, role: userDoc.role };
    const token = jwt.sign(payload, process.env.JWT_Key, { expiresIn: "1d" });
    res.json({
      name: userDoc.name,
      email: userDoc.email,
      id: userDoc._id,
      role: userDoc.role,
      token,
    });
  } catch (error) {
    res.status(400).send({ error: "Email or password do not match" });
  }
}
