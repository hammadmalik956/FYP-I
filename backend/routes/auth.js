const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {authorize,isAdmin} = require("../middlewares");
const { userController } = require("../controllers");
require("dotenv").config();


// Route 1: Create A user using : POST "/api/auth/createuser" Admin Loggedin Required
router.post(
  "/createuser",
  [authorize, isAdmin],
  [
    body("name", "Enter a valid Name: ").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 8 characters long").isLength({
      min: 8,
    }),
  ],
  userController.createUser
);
// Route 2: Authenticate a user using  : POST "/api/auth/login" Doesn't require Authentication
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  userController.login
);

// Route 3: GET all users data except admin  : POST "/api/auth/getusers" Login Admin Required
router.post("/getusers", [authorize, isAdmin], userController.getAllUsers);

// Route 4: Delete a User    : DELETE "/api/auth/getuser" Login Required

//TODO
module.exports = router;
