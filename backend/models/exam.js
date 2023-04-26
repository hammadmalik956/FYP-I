const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Joi = require("joi");
const ExamSchema = new Schema({
    examCode: {
        type: String,
        required: true

    },
    examName: {
        type: String,
        required: true,
    },
    serialNo: {
        type: Number,
        required: true,
    },
    examType: {
        type: String,
        required: true,
    },
    examDuration: {
        type: String,
        required: true,
    },
    examDate: {
        type: Date,
        required: true
    },
    room: {
        type: Schema.Types.ObjectId, ref: 'room',
        required: true
    },
    allotedStudents: [{
        type: Schema.Types.ObjectId, ref: 'student',
        required: true
    }],
    allotedInvigilator: {
        type: Schema.Types.ObjectId, ref: 'user',
        required: true
    },
    presentStudents: [{
        type: Schema.Types.ObjectId, ref: 'student',
        default: []
    }],
    cheatingStudents: [{
        type: Schema.Types.ObjectId, ref: 'student',
        default: []
    }],
    startTime: { type: Date, },
    endTime: { type: Date, },
    comStatus: {
        type: Boolean,
        defaul: false
    }


});
// validating exam
const validateExam = (exam) => {
    const schema = Joi.object().keys({
        examCode: Joi.string().required(),
        examName: Joi.string().required(),
        serialNo: Joi.number().required(),
        examType: Joi.string().required(),
        examDuration: Joi.string().required(),
        allotedInvigilator: Joi.required(),
        examDate: Joi.required(),
        room: Joi.required(),
        allotedStudents: Joi.array().required(),
        presentStudents: Joi.array().optional(),
        cheatingStudents: Joi.array().optional(),
        startTime: Joi.required(),
        endTime: Joi.required(),
        comStatus: Joi.optional()
    });
    return schema.validate(exam);
};

module.exports = model('exam', ExamSchema);
module.exports.validateExam = validateExam;