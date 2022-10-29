const express = require('express');
const User = require("../models/Room");
const router = express.Router();




// Route 1: Create room using POST http:://localhost:5000/api/createroom :: Requires Admin to be loggedin
router.post('/createroom',(req,res)=>{
    obj ={
        a :'Hammad',
        age:23
    }
    res.json(obj)
})
module.exports = router;