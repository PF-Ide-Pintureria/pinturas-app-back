// const { mercadopago } = require("../../services");
const { Orders, Users } = require("../../db");


const createOrder = async (products, idUser) => {
    console.log(idUser);
    const userOrder = await Users.findByPk(idUser);
    if (!userOrder) throw Error("Error: Usuario no encontrado");

    // products.map((product) => {

    //     return {
    //         name: product.name,
    //         price: product.price,
    //         quantity: product.quantity
    //     };
    // });

    const order = await Orders.create({

        products: products.map(product => JSON.stringify(product)),

    });
    await userOrder.addOrder(order);
    return {
        order,
        userOrder
    };

};


module.exports = createOrder;
