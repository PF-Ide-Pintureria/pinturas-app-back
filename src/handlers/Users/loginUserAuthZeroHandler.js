const { UsersControllers } = require('../../controllers');
const { loginAuthZero } = UsersControllers;

const loginUserAuthZeroHandler = async (req, res) => {

    try {
        //Verificar si el usuario ya esta creado en la bd, sino lo creamos
        const verifyUserAuthZero = await loginAuthZero(req.body);

        return res.status(200).json({

            status: "success",
            mensaje: "Te has identificado exitosamente",
            acceso: verifyUserAuthZero

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            status: "error",
            mensaje: "Error del servidor al iniciar sesión por medio de auth zero",
            error: error.message,

        });

    }

};

module.exports = loginUserAuthZeroHandler;
