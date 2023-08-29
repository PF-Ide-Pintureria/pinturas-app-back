const jwt = require("jsonwebtoken");
const moment = require("moment");
const { JWT_SECRET } = process.env;

const createToken = (user) => {

    const payload = {
        ...user,
        iat: moment().unix(),
        exp: moment().add(8, "days").unix()
    };

    return jwt.sign(payload, JWT_SECRET);

};

module.exports = createToken;
