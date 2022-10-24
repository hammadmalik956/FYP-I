const connectToMongo = require("./db");

const express = require("express");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
//Available Routes
app.use('/api/auth/',require('./routes/auth'))
app.use('/api/student',require('./routes/student'))

app.listen(port, () => {
  console.log(`SmartVision app at https://localhost:${port}`);
});


// admin login => allocation of invagilator to rooms