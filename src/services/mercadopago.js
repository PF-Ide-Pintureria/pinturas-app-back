const mercadopago = require("mercadopago");
const { parsed: ENV } = require('dotenv').config();
const { MELI_ACCESS_TOKEN } = ENV;


mercadopago ? mercadopago.configure({
    access_token: MELI_ACCESS_TOKEN,
}) : null;


module.exports = mercadopago;
