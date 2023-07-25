const { UsersControllers } = require('../../controllers');
const { registerUser } = UsersControllers;


const registerUserHandler = async (req, res) => {

    //Recoger datos de la petición
    const { email, password, rol, name, lastName,
        adress, locality, province, phone } = req.body;

    //Comprobar que me llegan bien los datos(validacion)
    //Respuesta "clara" o personalizada de ususarios duplicados(pendiente)

    if (!email || !password) {

        return res.status(400).json({

            status: "fail",
            message: "Faltan datos por enviar"

        });

    }

    try {

        const newUser = await registerUser(req.body);

        return res.status(200).json({

            status: "success",
            user: newUser

        });

    } catch (error) {

        const { message } = error.errors[0];
        console.error(message);
        return res.status(500).json({
            message,
        });

    }

};


module.exports = registerUserHandler;
