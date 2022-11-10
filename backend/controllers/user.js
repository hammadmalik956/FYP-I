const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validateUser, validateLogin } = require("../models/user");
const { JWT_SECRET_KEY } = require("../constants");
const { validationError } = require("../utils");

const createUser = async (req, res) => {
  // if there are errors , return Bad request and the errors
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).json({ validationError: validationError(error) });
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
    const authtoken = jwt.sign(data, JWT_SECRET_KEY);

    res.json({ authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  // if there are errors , return Bad request and the errors
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).json({ validationError: validationError(error) });
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
    const authtoken = jwt.sign(data, JWT_SECRET_KEY);
    res.json({ authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isAdmin: { $exists: false } }).select(
      "-password"
    );
    res.send(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createUser,
  login,
  getAllUsers,
};
