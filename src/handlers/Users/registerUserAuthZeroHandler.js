const { UsersControllers } = require('../../controllers');
const { registerAuthZero } = UsersControllers;

const registerUserAuthZeroHandler = async (req, res) => {

    try {

        //Verificar si el usuario ya esta creado en la bd, sino lo creamos
        const verifyUserAuthZero = await registerAuthZero(req.body);

        return res.status(200).json({
            status: "success",
            mensaje: "Usuario registrado exitosamente",
            acceso: verifyUserAuthZero,
        });

    } catch (error) {

        return res.status(500).json({

            status: "error",
            mensaje: "Error del servidor al registrar el usuario por medio de authZero",
            error: error.message,

        });

    }

};

module.exports = registerUserAuthZeroHandler;
