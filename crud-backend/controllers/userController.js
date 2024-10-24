const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No User Found" });
  res.json(users);
};

const getUser = async (req, res) => {
  if (!req?.body?.id) return res.status(400).json({ error: "Id is required" });
  const user = await User.findOne({ _id: req.body.id }).exec();
  if (!user) return res.status(204).json({ message: "No User Found" });
  res.json(user);
};

const createUser = async (req, res) => {
  if (!req?.body?.name || !req?.body?.email || !req?.body?.city)
    return res
      .status(400)
      .json({ error: "Names, Emails and Cities are required" });
  try {
    const result = User.create({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
    });
    res
      .status(201)
      .json({ success: `User ${result.name} is created successfully` });
  } catch (err) {
    console.error(err);
  }
};
module.exports = { getAllUsers, getUser, createUser };
