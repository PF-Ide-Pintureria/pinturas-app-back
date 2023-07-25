const productsUploads = require('./multerStorage');
const rateLimiter = require('./rateLimiter');

module.exports = {
    productsUploads,
    rateLimiter
};
