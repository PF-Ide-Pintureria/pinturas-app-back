const { OrdersControllers } = require('../../controllers');
const { webHook } = OrdersControllers;

const webHookHandler = async (req, res) => {

    try {

        const { body, query, params } = req;
        const { idOrder } = params;

        const bodySTR = JSON.stringify(body);
        const querySTR = JSON.stringify(query);

        const orderResult = webHook({
            idOrder,
            action: req.body.action,
            bodySTR,
            querySTR
        });

        res.status(200).send(orderResult);

    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: error.message
        });
    }

};

module.exports = webHookHandler;
