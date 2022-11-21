const  helmet  = require('helmet');
const {authorize} = require('./authverify');
const {isAdmin} = require('./isAdmin');
const { log_saver, logger } = require('./logger');
const { myCorsPolicy } = require("./cors");
const { limiter } = require("./limiter");

module.exports ={
    authorize,
    isAdmin,log_saver,
    logger,
    helmet,
    myCorsPolicy,
    limiter
}