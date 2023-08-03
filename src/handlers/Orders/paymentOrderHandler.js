const { OrdersControllers } = require("../../controllers");
const { paymentOrder } = OrdersControllers;


const paymentOrderHandler = async (req, res) => {

    try {
        const { idOrder, back_urls } = req.body;
        const result = await paymentOrder({ idOrder, back_urls });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};


module.exports = paymentOrderHandler;
