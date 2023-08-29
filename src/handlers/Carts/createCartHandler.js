const { CartsControllers } = require('../../controllers');
const { createCart } = CartsControllers;

const createCartHandler = async (req, res) => {

    try {

        const { idUser, products } = req.body;

        const createdCart = await createCart({ idUser, products });

        return res.status(200).json(createdCart);
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

module.exports = createCartHandler;
