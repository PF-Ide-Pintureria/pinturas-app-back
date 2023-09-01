const { Orders } = require('../../db');

const failureOrderController = async ({ idOrder }) => {

    const completedOrder = await Orders.findByPk(idOrder);
    if (!completedOrder) throw Error('Error: Orden no encontrada');
    await completedOrder.update({ state: 'failed' });

    return completedOrder;

};


module.exports = failureOrderController;
