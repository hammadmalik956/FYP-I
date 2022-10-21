const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://hammadhameed956:hammadmongo@cluster0.u9wvupw.mongodb.net/test";

  const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected To Mongo Successfully");

    })
  }
  module.exports = connectToMongo;