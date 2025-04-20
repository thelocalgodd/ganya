const User = require("../models/User");

const getUser = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    message: "User found",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({})
    .select("-password -__v")
    .sort({ createdAt: -1 });
  if (!users) {
    return res.status(404).json({
      message: "No users found",
    });
  }

  return res.status(200).json({
    message: "Users found",
    users,
  });
};

const updateUser = async (req, res) => {
  const { name, email, phone } = req.body;
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { name, email, phone },
      { new: true }
    ).select("-password -__v");

    return res.status(200).json({
      message: "User updated",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Updating User]",
    });
  }
};

const deleteUser = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  try {
    await User.findByIdAndDelete(user._id);

    return res.status(200).json({
      message: "User deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Deleting User]",
    });
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});

    return res.status(200).json({
      message: "All users deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Deleting All Users]",
    });
  }
};

module.exports = {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
