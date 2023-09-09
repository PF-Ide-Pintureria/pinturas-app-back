const { mercadopago } = require("../../services");
const { Orders } = require('../../db.js');
const URL_BASE = "https://pinturas-app-front-git-pre-develop-pf-pinturas.vercel.app";

const paymentOrderController = async ({ idOrder, }) => {

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

            return {
                id: parsedProduct.id,
                title: parsedProduct.name,
                quantity: parseInt(parsedProduct.quantity),
                unit_price: parsedProduct.price,
                currency_id: "ARS",
            };

        }),
        back_urls: {
            failure: `${URL_BASE}/payment/failure`,
            pending: `${URL_BASE}/payment/pending`,
            success: `${URL_BASE}/payment/successful`
        },
        notification_url:
            "https://back-server-pinturas-app.onrender.com" +
            `/orders/webhook/${idOrder}`,
    };

    const orderMeli = await mercadopago.preferences.create(preference);
    return orderMeli;
};

module.exports = paymentOrderController;
