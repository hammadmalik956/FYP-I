

const { Exam } = require("../models");
const { validateExam } = require("../models/exam");
const { validationError, sendResponse } = require("../utils");

// Create exams only admin or academics ca do this
const createExam = async (req, res) => {
    // validating if there are correct details
    const { error } = validateExam(req.body);

    if (error) {
        return sendResponse(res, "error", 422, validationError(error));
    }
    //finding Exam if exist
    const examdata = await Exam.findOne({ examCode: req.body.examCode })
    if (!examdata) {
        // creating Examination
        let exam = await Exam.create({
            examCode: req.body.examCode,
            examName: req.body.examName,
            serialNo: req.body.serialNo,
            examType: req.body.examType,
            examDuration: req.body.examDuration,
            allotedInvigilator: req.body.allotedInvigilator,
            room: req.body.room,
            examDate: req.body.examDate,
            allotedStudents: req.body.allotedStudents,
            presentStudents: req.body.presentStudents,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            comStatus: req.body.comStatus
        });
        sendResponse(res, "success", 200, "Examination Created", exam);

    } else {
        sendResponse(res, "failure", 400, "Exam Already Exist ");
    }
}
// get all exams
const getExams = async (req, res) => {

    const allexams = await Exam.find({});
    sendResponse(res, "success", 200, "Got All Exams ", allexams);
}





module.exports = { createExam, getExams };