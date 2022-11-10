const {connectToMongo} = require("./models");
const express = require("express");
//const path = require("path");
const { PORT, HOSTNAME } = require("./constants")

const app = express();
const port = PORT||process.env.PORT ||5000;
const host = process.env.HOST || HOSTNAME;

app.use(express.json());
//Available Routes

app.use('/api/auth/',require('./routes/user'))
app.use('/api/room',require('./routes/room'))

app.listen(port, () => {
  console.log("SERVER RUNNING AT " + host + ":" + port);
  connectToMongo();
});
module.exports = { app }