const productsUploads = require('./multerStorage');
const rateLimiter = require('./rateLimiter');
const auth = require("./auth");

module.exports = {
    productsUploads,
    rateLimiter,
    auth
};
