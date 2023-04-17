const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const Joi = require("joi");
const RoomSchema = new Schema({
   building:{
    type:String,
    required:true

   },
   floor:{
    type:String,
    required:true
   },
   roomID:{
    type:String,
    required:true
   },
   
  });
  // validating room 
  const validateRoom = (room) => {
   const schema = Joi.object().keys({
     building: Joi.string().required(),
     floor: Joi.string().required(),
     roomID: Joi.string().required(),
 
    
    
     
   });
   return schema.validate(room);
 };

  module.exports = model('room',RoomSchema);
  module.exports.validateRoom = validateRoom;