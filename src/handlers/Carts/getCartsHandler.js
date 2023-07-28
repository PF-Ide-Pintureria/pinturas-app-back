const { CartsControllers } = require('../../controllers');
const { getCarts, findCartById } = CartsControllers;


const getCartsHandler = async (req, res) => {

    try {

        const { idCart, idUser } = req.body;

        if (idCart || idUser) {

            const cart = await findCartById({ idCart, idUser });

            return res.status(200).json({
                status: 'success',
                cart,
            });
        }

        const carts = await getCarts();

        return res.status(200).json({
            status: 'success',
            carts,
        });

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


module.exports = getCartsHandler;
