const { UsersControllers } = require('../../controllers');
const { registerAuth0 } = UsersControllers;
const registerUserAuthZeroHandler = async (req, res) => {

    try {

        //Verificar si el usuario ya esta creado en la bd, sino lo creamos
        const verifyUserAuthZero = await registerAuth0(req.oidc.user);

        return res.status(200).json({
            status: "success",
            user: verifyUserAuthZero,
            mensaje: "Usuario registrado exitosamente"
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