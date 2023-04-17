

const { Student } = require("../models");
const { validateStudent } = require("../models/student");
const { validationError, sendResponse } = require("../utils");

// add new room only admin can do this
const createStudent = async (req, res) => {
    // validating if there are correct details
    const { error } = validateStudent(req.body);

    if (error) {
        return sendResponse(res, "error", 422, validationError(error));
    }
    //finding student if exist
    const studentdata = await Student.findOne({ rollNum: req.body.rollNum })
    if (!studentdata) {
        // creating student
        let student = await Student.create({
            name: req.body.name,
            email: req.body.email,
            rollNum: req.body.rollNum,
            section: req.body.section,
        });
        sendResponse(res, "success", 200, "Student Created", student);

    } else {
        sendResponse(res, "failure", 400, "Student Already Exist ");
    }
}
// get all rooms
const getStudents = async (req, res) => {

    const allstudents = await Student.find({});
    sendResponse(res, "success", 200, "Got All Students ", allstudents);
}





module.exports = { createStudent, getStudents };