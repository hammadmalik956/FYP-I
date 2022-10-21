const mongoose = require('mongoose');

const StudentSchema = new Schema({
   name:{
    type:String,
    required:true

   },
   rollnumber:{
    type:int,
    required:true
   },
   section:{
    type:String,
    required:true
   }

  });

  module.exports = mongoose.model('student',StudentSchema);