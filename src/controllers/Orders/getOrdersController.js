const { Orders } = require('../../db');


const getOrdersController = async ({ idUser, state, idOrder }) => {

    let searchCondition = {};
    idUser ? searchCondition.userId = idUser : null;
    state ? searchCondition.state = state : null;
    idOrder ? searchCondition.id = idOrder : null;

    const orders = await Orders.findAll({ where: searchCondition });

    if(!orders?.length) throw new Error('No se encontraron ordenes');

    return orders;

};

module.exports = getOrdersController;
