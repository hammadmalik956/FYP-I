const express = require("express");
const router = express.Router();
const { authorize, isAdmin } = require("../middlewares");
const { studentController } = require("../controllers");
const { errorCatcher } = require("../errors");




// Route 1: Create room using POST http:://localhost:5000/api/createroom :: Requires Admin to be loggedin
router.post("/createstudent",[authorize,isAdmin], errorCatcher(studentController.createStudent));
// Route 2: Get all  rooms using 
router.post("/getstudents",[authorize,isAdmin], errorCatcher(studentController.getStudents));




module.exports = router;