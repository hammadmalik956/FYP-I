const {authorize} = require('./authverify');
const {isAdmin} = require('./isAdmin');
const { log_saver, logger } = require('./logger');


module.exports ={
    authorize,
    isAdmin,log_saver,
    logger
}