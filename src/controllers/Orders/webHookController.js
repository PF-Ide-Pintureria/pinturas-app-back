const { Orders, Products } = require("../../db");

const webHookController = async ({ idOrder, action, bodySTR, querySTR }) => {

    const order = await Orders.findByPk(idOrder);
    if (!order) throw Error("Error: No se encontro la orden");

    if (action === 'payment.created') {

        const orderProducts = order.products.map(product =>
            JSON.parse(product));

        orderProducts.forEach(async product => {

            const dbProduct = await Products.findByPk(product.id);
            if (!dbProduct) throw new Error('Error: Producto no encontrado');
            await dbProduct?.update({
                stock: Math.max(0, dbProduct.stock - product.quantity)
            });
        });
        // if (bodySTR) order.meliBody = bodySTR;
        // if (querySTR) order.meliQuery = querySTR;
        await order.update({
            meliBody: bodySTR,
            meliQuery: querySTR,
            state: "paid"
        });
    }

    return order;

};

module.exports = webHookController;
