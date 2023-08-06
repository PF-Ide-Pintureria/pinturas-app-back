const { Orders } = require('../../db');


const webHookHandler = async (req, res) => {

    const { body, query, params } = req;

    const { idOrder } = params;

    const order = await Orders.findByPk(idOrder);
    console.log('Esta es la orden', order?.dataValues);

    console.log('params', params);

    console.log('query', query);

    console.log('body', body);

    res.status(200).send('OK');

};


module.exports = webHookHandler;
