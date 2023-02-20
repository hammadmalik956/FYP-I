const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const Joi = require("joi");
const StudentSchema = new Schema({
   Name:{
    type:String,
    required:true

   },
   email:{
    type:String,
    required:true,
   },
   RollNum:{
    type:String,
    required:true
   },
   Section:{
    type:String,
    required:true
   },
   
  });
  // validating room 
  const validateStudent = (student) => {
   const schema = Joi.object().keys({
     Name: Joi.string().required(),
     email: Joi.string().email().required().lowercase(),
     RollNum: Joi.string().required(),
     Section: Joi.string().required(),
   });
   return schema.validate(student);
 };

  module.exports = model('student',StudentSchema);
  module.exports.validateStudent = validateStudent;