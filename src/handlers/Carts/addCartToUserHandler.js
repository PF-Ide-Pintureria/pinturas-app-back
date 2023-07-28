const { CartsControllers } = require('../../controllers');
const { addCartToUser } = CartsControllers;


const addCartToUserHandler = async (req, res) => {

    const { idUser, idCart } = req.body;

    if (!idUser) {
        return res.status(400).json({
            status: "fail",
            message: "Faltan datos para poder completar esta solicitud",
        });
    }

    try {

        const cart = await addCartToUser({ idUser, idCart });

        return res.status(200).json(cart);

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({
            name: error.name,
            routine: error.routine,
            detail: error.detail,
        });

    }

};

module.exports = addCartToUserHandler;
