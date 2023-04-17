const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const Joi = require("joi");
const StudentSchema = new Schema({
   name:{
    type:String,
    required:true

   },
   email:{
    type:String,
    required:true,
   },
   rollNum:{
    type:String,
    required:true
   },
   section:{
    type:String,
    required:true
   },
   
  });
  // validating room 
  const validateStudent = (student) => {
   const schema = Joi.object().keys({
     name: Joi.string().required(),
     email: Joi.string().email().required().lowercase(),
     rollNum: Joi.string().required(),
     section: Joi.string().required(),
   });
   return schema.validate(student);
 };

  module.exports = model('student',StudentSchema);
  module.exports.validateStudent = validateStudent;