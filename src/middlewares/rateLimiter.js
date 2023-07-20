const RateLimiter = require('express-rate-limit');

const rateLimiter = RateLimiter({
    windowMs: 1000 * 60 * 60,
    max: 100,
    message: 'Excediste el número de peticiones por hora'
});

module.exports = rateLimiter;
