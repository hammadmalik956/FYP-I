const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const authverify = require("../milddleware/authverify");
const isAdmin = require("../milddleware/isAdmin");
require('dotenv').config();
// Route 1: Create A user using : POST "/api/auth/createuser" Admin Loggedin Required
router.post(
  "/createuser",
  [authverify, isAdmin],
  [
    body("name", "Enter a valid Name: ").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 8 characters long").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with same email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry the User with this email already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        employementstatus: req.body.employementstatus,
        isAdmin: req.body.isAdmin,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, process.env.JWT_SECRET);

      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
// Route 2: Authenticate a user using  : POST "/api/auth/login" Doesn't require Authentication
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ error: "Please login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };
      const authtoken = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3: GET all users data except admin  : POST "/api/auth/getusers" Login Admin Required
router.post("/getusers", [authverify, isAdmin], async (req, res) => {
  try {
    const users = await User.find({ isAdmin: { $exists: false } }).select("-password");
    res.send(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 4: Delete a User    : DELETE "/api/auth/getuser" Login Required

//TODO
module.exports = router;
