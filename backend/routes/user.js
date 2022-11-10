const express = require("express");
const router = express.Router();
const {authorize,isAdmin} = require("../middlewares");
const { userController } = require("../controllers");
require("dotenv").config();

// Route 1: Create A user using : POST "/api/auth/createuser" Admin Loggedin Required

router.post("/createuser",[authorize, isAdmin],userController.createUser);


// Route 2: Authenticate a user using  : POST "/api/auth/login" Doesn't require Authentication

router.post("/login",userController.login);

// Route 3: GET all users data except admin  : POST "/api/auth/getusers" Login Admin Required

router.post("/getusers", [authorize, isAdmin], userController.getAllUsers);


module.exports = router;
