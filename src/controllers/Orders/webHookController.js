const { Orders } = require("../../db");


const webHookController = async ({ idOrder, state }) => {

    const order = await Orders.findByPk(idOrder);
    if (!order) throw Error("Error: No se encontro la orden");
    order.state = state;
    await order.save();
    return order;

};


module.exports = webHookController;
