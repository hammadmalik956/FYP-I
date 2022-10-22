const connectToMongo = require("./db");

const express = require("express");

connectToMongo();
const app = express();
const port = 3000;

app.use(express.json());
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/student',require('./routes/student'))

app.listen(port, () => {
  console.log(`SmartVision app at https://localhost:${port}`);
});
