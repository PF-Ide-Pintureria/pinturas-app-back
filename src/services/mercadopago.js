const mercadopago = require("mercadopago");
// eslint-disable-next-line no-undef
const { MELI_ACCESS_TOKEN } = process.env;


mercadopago ? mercadopago.configure({
    access_token: MELI_ACCESS_TOKEN,
}) : null;


module.exports = mercadopago;
