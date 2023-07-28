const { UsersControllers, CartsControllers } = require('../../controllers');
const { registerUser } = UsersControllers;
const { createCart } = CartsControllers;


const registerUserHandler = async (req, res) => {

    //Recoger datos de la petición
    const { email, password, rol, name, lastName,
        address, locality, province, phone, createCartForUser } = req.body;

    // Comprobar que me llegan bien los datos(validacion)
    // Respuesta "clara" o personalizada de ususarios duplicados(pendiente)

    if (!email || !password) {

        return res.status(400).json({

            status: "fail",
            message: "Faltan datos por enviar"

        });

    }

    try {

        const newUser = await registerUser(req.body);
        if (newUser && createCartForUser) {
            const createdCart = await createCart({
                idUser: newUser.id,
            });
        }

        return res.status(200).json({

            status: "success",
            user: newUser,

        });

    } catch (error) {

        console.error(error);
        return res.status(500).json({
            name: error.name,
            routine: error.routine,
            detail: error.detail,
        });

    }

};


module.exports = registerUserHandler;
