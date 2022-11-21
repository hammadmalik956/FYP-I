const {connectToMongo} = require("./models");
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const { PORT, HOSTNAME } = require("./constants");
const { docOptions } = require("./docs");
const { logger, log_saver, helmet, myCorsPolicy, limiter } = require("./middlewares");

const app = express();
const port = PORT||process.env.PORT ||5000;
const host = process.env.HOST || HOSTNAME;

app.use(express.json());
//app.use(helmet());
app.use(myCorsPolicy())
app.use(limiter());
app.use(logger());
app.use(log_saver());
//Available Routes


app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(docOptions)));
app.use('/api/user/',require('./routes/user'))
app.use('/api/room',require('./routes/room'))

app.listen(port, () => {
  console.log("SERVER RUNNING AT " + host + ":" + port);
  connectToMongo();
});
module.exports = { app }