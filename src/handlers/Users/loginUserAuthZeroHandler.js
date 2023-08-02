const { UsersControllers } = require('../../controllers');
const { registerAuth0 } = UsersControllers;


const loginUserAuthZeroHandler = async (req, res) => {

    try {

        //Verificar si el usuario ya esta creado en la bd, sino lo creamos
        const verifyUserAuthZero = await registerAuth0(req.oidc.user);

        return res.status(200).json({
            status: "success",
            user: verifyUserAuthZero,
            mensaje: "Se ha iniciado sesión exitosamente"
        });

    } catch (error) {

        return res.status(500).json({

            status: "error",
            mensaje: "Error del servidor al iniciar sesión por medio de auth zero",
            error: error.message,

        });

    }

};

module.exports = loginUserAuthZeroHandler;
