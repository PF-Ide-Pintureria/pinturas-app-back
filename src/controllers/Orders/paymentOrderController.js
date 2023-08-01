const { mercadopago } = require("../../services");
const { Orders } = require('../../db.js');


const paymentOrderController = async ({ idOrder, back_urls }) => {

    console.log('idOrder', idOrder);
    const order = await Orders.findByPk(idOrder);
    if (!order) throw Error("Error: No se encontro la orden");
    const products = order.products;

    const preference = {

        items: products.map(productJson => {
            const product = JSON.parse(productJson);
            return {
                id: product.id,
                title: product.name,
                quantity: parseInt(product.quantity),
                unit_price: product.price,
                currency_id: "ARS",
            };

        }),

        back_urls: JSON.parse(back_urls),

    };

    // DESCONTAR STOCK EN DB EN CASO DE QUE SEA SUCCESS
    const orderMeli = await mercadopago.preferences.create(preference);
    return orderMeli;

};


module.exports = paymentOrderController;
