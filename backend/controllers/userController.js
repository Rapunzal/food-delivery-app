import User from "../models/userModel";

export async function getUsers(req, res) {
  try {
    const userList = User.find({});
    res.status(200).json({ message: "Success", data: { userList } });
  } catch (error) {
    res.status(404).json("User Not Found");
  }
}

//Login
export async function login(req, res) {
  try {
    const userDoc = User.find({ email: req.body.email });
    if (!userDoc) {
      res.send("User or password do not match");
    }
    
  } catch (error) {
    res.status(400).send("Email or password do not match");
  }
}

export async function addUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });
    await newUser.save();
    res.send("User Registered successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json("Cannot add user");
  }
}
