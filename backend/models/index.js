const mongoose = require("mongoose");
const { DATABASE_URL, DATABASE_NAME } = require("../constants");
const User = require("./user");
const Room = require("./room");
const Student = require("./student");
const Exam = require("./exam");
const connectToMongo = () => {
  mongoose.connect(DATABASE_URL + DATABASE_NAME, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
      return console.log(`CONNECTION TO MONGO SUCCESSFUL!`);
  }).catch(error => {
      console.log("Error connecting to database: ", error.message);
      return process.exit(1);
  });
};

module.exports = {connectToMongo, User,Room,Student,Exam};