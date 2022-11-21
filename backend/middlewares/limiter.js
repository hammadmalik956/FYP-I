const rateLimit = require("express-rate-limit");

const limiter = () => {
    return rateLimit({
        windowMs: 15 * 60 * 1000, // hour
        max: 1000,
        message: "Too many Attempts on this api created from this IP, please try again after an hour"
    })
};

module.exports = { limiter }