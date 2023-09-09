const { CartsControllers } = require('../../controllers');
const { findCartById } = CartsControllers;

const findCartByIdHandler = async (req, res) => {

    console.log('Entra a findCartByIdHandler');

    const { idCart, idUser } = req.query;

    if (!idCart && !idUser) {
        return res.status(400).json({
            status: "fail",
            message: "Faltan datos para poder completar esta solicitud",
        });
    }

    try {

        const cart = await findCartById({ idCart, idUser });
        console.log('cart', cart);

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

module.exports = findCartByIdHandler;
