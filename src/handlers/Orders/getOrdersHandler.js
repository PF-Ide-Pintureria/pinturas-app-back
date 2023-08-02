const { OrdersControllers } = require("../../controllers");
const { getOrders } = OrdersControllers;


const getOrdersHandler = async (req, res) => {

    try {
        const { idUser, state, idOrder } = req.body;
        const result = await getOrders({ idUser, state, idOrder });
        return res.status(200).json({
            status: 'success',
            orders: result
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};


module.exports = getOrdersHandler;
