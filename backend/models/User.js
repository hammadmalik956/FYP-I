const mongoose = require('mongoose');

const UserSchema = new Schema({
   name:{
    type:String,
    required:true

   },
   email:{
    type:string,
    required:true,
    unique:true
   },
   passowrd:{
    type:String,
    required:true
   }
  });

  module.exports = mongoose.model('user',UserSchema);