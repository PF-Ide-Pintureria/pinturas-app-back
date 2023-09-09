const { OrdersControllers } = require("../../controllers");
const { createOrderByCartId } = OrdersControllers;

const createOrderByCartIdHandler = async (req, res) => {

    try {
        const { idCart } = req.body;
        const result = await createOrderByCartId(idCart);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = createOrderByCartIdHandler;
