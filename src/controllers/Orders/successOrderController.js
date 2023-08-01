const { Orders } = require('../../db');


const successOrderController = async ({ idOrder }) => {

    const completedOrder = await Orders.findByPk(idOrder);
    if (!completedOrder) throw Error('Error: Orden no encontrada');
    await completedOrder.update({ state: 'paid' });
    return completedOrder;

};


module.exports = successOrderController;
