const express = require("express");
const router = express.Router();
const { authorize, isAdmin } = require("../middlewares");
const { roomController } = require("../controllers");
const { errorCatcher } = require("../errors");




// Route 1: Create room using POST http:://localhost:5000/api/createroom :: Requires Admin to be loggedin
router.post("/createroom",[authorize,isAdmin], errorCatcher(roomController.createRoom));




module.exports = router;