const { mercadopago } = require("../../services");
const { Orders } = require('../../db.js');


const paymentOrderController = async ({ idOrder, back_urls }) => {

    console.log('idOrder', idOrder);
    const order = await Orders.findByPk(idOrder);
    if (!order) throw Error("Error: No se encontro la orden");
    const products = order.products;

    const preference = {

        items: products.map(productJson => {
            let parsedProduct = JSON.parse(productJson);
            if (typeof parsedProduct === 'string') {
                try {
                    parsedProduct = JSON.parse(parsedProduct);
                }
                catch (error) {
                    console.error(error);
                    throw Error("Error: No se pudieron parsear correctamente" +
                        " los productos");
                }
            }
            console.log('parsed product', parsedProduct, typeof parsedProduct);
            console.log('product', parsedProduct["id"], parsedProduct.name,
                parsedProduct.quantity, parsedProduct.price);
            return {
                id: parsedProduct.id,
                title: parsedProduct.name,
                quantity: parseInt(parsedProduct.quantity),
                unit_price: parsedProduct.price,
                currency_id: "ARS",
            };

        }),

        back_urls: JSON.parse(back_urls || '{}'),

    };

    console.log('preference', preference);

    // DESCONTAR STOCK EN DB EN CASO DE QUE SEA SUCCESS
    const orderMeli = await mercadopago.preferences.create(preference);
    return orderMeli;

};


module.exports = paymentOrderController;
