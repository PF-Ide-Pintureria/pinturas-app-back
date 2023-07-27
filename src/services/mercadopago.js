const mercadopago = require("mercadopago");
require("dotenv").config();
const { MELI_ACCESS_TOKEN } = process.env;


mercadopago ? mercadopago.configure({
    access_token: MELI_ACCESS_TOKEN,
}) : null;


module.exports = mercadopago;
