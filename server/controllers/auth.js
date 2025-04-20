const express = require("express"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  User = require("../models/User"),
  { JWT_SECRET } = process.env,
  { sendNewUserMail } = require("../lib/sendMail");

const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const emailExists = await User.find({ email });
    const phoneExists = await User.find({ phone });

    if (emailExists.length > 0 || phoneExists.length > 0) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Checking User Existence]",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  try {
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "12h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.cookie("user", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Send welcome email to the new user
    sendNewUserMail(email);

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Creating New User]",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email });
    if (user.length === 0) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user[0]._id }, JWT_SECRET, {
      expiresIn: "12h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.cookie("user", JSON.stringify(user[0]), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user[0]._id,
        name: user[0].name,
        email: user[0].email,
        phone: user[0].phone,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error [Login]",
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("user");

  return res.status(200).json({
    message: "Logout successful",
  });
};

module.exports = {
  register,
  login,
  logout,
};
