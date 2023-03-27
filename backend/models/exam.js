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
    room: {
        type: Schema.Types.ObjectId, ref: 'room',
        required: true
    },
    allotedStudents: [{
        type: Schema.Types.ObjectId, ref: 'student',
        required: true
    }],
    presentStudents: [{
        type: Schema.Types.ObjectId, ref: 'student',
    }],
    startTime: { type: Date, },
    endTime: { type: Date, },
    comStatus: { type: Boolean }


});
// validating exam
const validateExam = (exam) => {
    const schema = Joi.object().keys({
        examCode: Joi.string().required(),
        examName: Joi.string().required(),
        room: Joi.required(),
        allotedStudents: Joi.array().required(),
        presentStudents: Joi.array().optional(),
        startTime: Joi.required(),
        endTime: Joi.required(),
        comStatus: Joi.optional()
    });
    return schema.validate(exam);
};

module.exports = model('exam', ExamSchema);
module.exports.validateExam = validateExam;