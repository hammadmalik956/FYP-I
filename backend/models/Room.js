const mongoose = require('mongoose');
const {Schema} = mongoose;
const RoomSchema = new Schema({
   Building:{
    type:String,
    required:true

   },
   Floor:{
    type:String,
    required:true
   },
   RoomID:{
    type:Number,
    required:true
   },
   
  });


  module.exports = mongoose.model('room',RoomSchema);