const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Create a User using; POST "/api/auth/createuser". no Login required
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Enter Valid Password").isLength({ min: 8 }),
    body("role", "Enter Valid Role").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check weather the user with this email already exist
    let user = await User.findOne({ email: req.body.email });

    try {
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry User with this email already exist" });
      } else {
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        });
        res.json({ nice: "nice" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error accured");
    }
  }
);

module.exports = router;
