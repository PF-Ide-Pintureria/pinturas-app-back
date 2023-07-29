const jwt = require("jsonwebtoken");
const moment = require("moment");
const { parsed: ENV } = require('dotenv').config();
const { JWT_SECRET } = ENV;


const createToken = (user) => {

    const payload = {
        ...user,
        iat: moment().unix(),
        exp: moment().add(8, "days").unix()
    };

    return jwt.sign(payload, JWT_SECRET);

};


module.exports = createToken;
