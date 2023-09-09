const mercadopago = require("mercadopago");
const { MELI_ACCESS_TOKEN } = process.env;

mercadopago && MELI_ACCESS_TOKEN ? mercadopago.configure({
    access_token: MELI_ACCESS_TOKEN,
}) : null;

module.exports = mercadopago;
