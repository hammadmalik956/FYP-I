const express = require("express");
const router = express.Router();
const { authorize, isAdmin } = require("../middlewares");
const { examController } = require("../controllers");
const { errorCatcher } = require("../errors");




// Route 1: Create room using POST http:://localhost:5000/api/createroom :: Requires Admin to be loggedin
router.post("/createexam",[authorize,isAdmin], errorCatcher(examController.createExam));
// Route 2: Get all  rooms using 
router.post("/getexams",[authorize,isAdmin], errorCatcher(examController.getExams));
// Route 2: Get specific  rooms using exam id
router.post("/getexambyid",[authorize,isAdmin], errorCatcher(examController.getExamByID));




module.exports = router;