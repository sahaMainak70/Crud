const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No User Found" });
  res.json({ users });
};

const getUser = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ error: "Id is required" });
  const user = await User.findOne({ _id: req.params.id }).exec();
  if (!user) return res.status(204).json({ message: "No User Found" });
  res.json({ user });
};

const createUser = async (req, res) => {
  if (!req?.body?.name || !req?.body?.email || !req?.body?.city)
    return res
      .status(400)
      .json({ message: "Name, Email and City fields are required" });
  try {
    const result = User.create({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
    });
    res
      .status(201)
      .json({ message: `User ${req.body.name} is created successfully` });
  } catch (err) {
    console.error(err);
  }
};

const updateUser = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "Id is required" });
  if (!req?.body?.name || !req?.body?.email || !req?.body?.city)
    return res
      .status(400)
      .json({ message: "Name, Email and City fields are required" });
  try {
    const result = await User.findOneAndUpdate(
      { _id: req.body.id },
      {
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
      }
    );
    res
      .status(201)
      .json({ message: `User ${req.body.name} is Updated successfully` });
  } catch (err) {
    console.error(err);
  }
};

const deleteUser = (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Id is required" });
  try {
    const result = User.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: `User is Deleted successfully` });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
