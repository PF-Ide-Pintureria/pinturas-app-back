const { OrdersControllers } = require("../../controllers");
const { successOrder } = OrdersControllers;


const successOrderHandler = async (req, res) => {

    try {
        const { idOrder } = req.params;
        const result = await successOrder({ idOrder });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};


module.exports = successOrderHandler;
