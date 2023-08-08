const { CartsControllers } = require('../../controllers');
const { deleteCart } = CartsControllers;


const deleteCartHandler = async (req, res) => {

    const { idUser, idCart } = req.body;

    if (!idUser && !idCart) {
        return res.status(400).send('No user or cart found');
    }

    try {

        const cart = await deleteCart({ idUser, idCart });

        return res.status(200).json(cart);

    } catch (error) {

        console.error(error);
        return res.status(500).json({
            name: error.name,
            routine: error.routine,
            detail: error.detail,
        });

    }

};

module.exports = deleteCartHandler;
