const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const Joi = require("joi");
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
    type:String,
    required:true
   },
   
  });
  // validating room 
  const validateRoom = (room) => {
   const schema = Joi.object().keys({
     Building: Joi.string().required(),
     Floor: Joi.string().required(),
     RoomID: Joi.string().required(),
 
    
    
     
   });
   return schema.validate(room);
 };

  module.exports = model('room',RoomSchema);
  module.exports.validateRoom = validateRoom;