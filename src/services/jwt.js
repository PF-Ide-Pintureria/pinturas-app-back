const jwt = require("jsonwebtoken");
const moment = require("moment");
require('dotenv').config();
const { JWT_SECRET } = process.env;


const createToken = (user) => {

    const payload = {

        id: user.id,
        email: user.email,
        rol: user.rol,
        name: user.name,
        lastName: user.lastName,
        address: user.address,
        locality: user.locality,
        province: user.province,
        phone: user.phone,
        iat: moment().unix(),
        exp: moment().add(8, "days").unix()

    };

    return jwt.sign(payload, JWT_SECRET);

};


module.exports = createToken;
