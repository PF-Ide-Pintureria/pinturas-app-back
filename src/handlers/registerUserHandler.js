const { registerUserController } = require('../controllers/');


const registerUserHandler = async (req, res) => {

    //Recoger datos de la petición
    const { email, password, rol, name, lastName, adress, locality, province, phone } = req.body;

    //Comprobar que me llegan bien los datos(validacion)
    //Respuesta "clara" o personalizada de ususarios duplicados(pendiente)

    if (!email || !password || !rol) {

        return res.status(400).json({

            status: "error",
            message: "Faltan datos por enviar"

        });

    }

    try {

        const newUser = await registerUserController(email, password, rol, name, lastName, adress, locality, province, phone);

        return res.status(200).json({

            status: "success",
            user: newUser
        });

    } catch (error) {

        return res.status(500).json({ error: error.errors[0].message });

    }

};

module.exports = registerUserHandler;
