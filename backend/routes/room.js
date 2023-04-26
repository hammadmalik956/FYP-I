const express = require("express");
const router = express.Router();
const { authorize, isAdmin } = require("../middlewares");
const { roomController } = require("../controllers");
const { errorCatcher } = require("../errors");




// Route 1: Create room using POST http:://localhost:5000/api/createroom :: Requires Admin to be loggedin
router.post("/createroom",[authorize,isAdmin], errorCatcher(roomController.createRoom));
// Route 2: Get all  rooms using 
router.post("/getrooms",[authorize], errorCatcher(roomController.getRoom));
// Route 2: Get   rooms using  id
router.post("/getroombyid",[authorize], errorCatcher(roomController.getRoomByID));




module.exports = router;