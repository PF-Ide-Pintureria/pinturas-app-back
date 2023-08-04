// const { mercadopago } = require("../../services");
const { Orders, Users } = require("../../db");


const createOrderController = async (products, idUser) => {

    const userOrder = await Users.findByPk(idUser);
    if (!userOrder) throw Error("Error: Usuario no encontrado");
    let total = 0;

    const parsedProducts = products.map(product => {
        total += product.price * product.quantity;
        return typeof product === 'string' ? product : JSON.stringify(product);
    });

    const order = await Orders.create({
        products: parsedProducts,
        total,
    });

    // console.log("order:", order);
    await userOrder.addOrder(order);

    return {
        order,
        // userOrder
    };

};


module.exports = createOrderController;
