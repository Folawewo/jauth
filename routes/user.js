const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User successfully registered!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occured" });
  }
});

module.exports = router;
