const { Orders, Products } = require("../../db");


const webHookController = async ({ idOrder, state }) => {

    const order = await Orders.findByPk(idOrder);
    if (!order) throw Error("Error: No se encontro la orden");
    order.state = state;
    await order.save();
    const products = order.products;
    for (let i = 0; i < products.length; i++) {
        const parsedProduct = JSON.parse(products[i]);
        const product = await Products.findByPk(parsedProduct[i].id);
        if (!product) throw Error("Error: No se encontro el producto");
        product.stock = Math.max(product.stock - products[i].orderline.quantity, 0);
        await product.save();
    }
    return order;

};


module.exports = webHookController;
