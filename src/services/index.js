const uploadImage = require('./cloudinary');
const createToken = require('./jwt');
const transporter = require('./nodemailer');
const mercadopago = require('./mercadopago');
const authZero    = require('./authZero');


module.exports = {
    uploadImage,
    createToken,
    transporter,
    mercadopago,
    authZero
};
