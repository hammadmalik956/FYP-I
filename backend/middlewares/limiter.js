const rateLimit = require("express-rate-limit");

const limiter = () => {
    return rateLimit({
        windowMs: 15 * 60 * 1000, // hour
        max: 1000,
        message: "Login Limit Exceeded, Try after an hour"
    })
};

module.exports = { limiter }