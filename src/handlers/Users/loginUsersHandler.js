const { UsersControllers } = require('../../controllers');
const { loginUsers } = UsersControllers;

const loginUsersHandler = async (req, res) => {

    const { email, password } = req.body;

    // Buscar en bd si existe y comparar contraseña
    if (!email || !password) {

        return res.status(400).json({

            status: "error",
            mensaje: "Faltan datos por enviar"

        });

    }

    try {

        const { user, token } = await loginUsers(email, password);

        if (user && token) {

            // Devolver datos
            return res.status(200).json({

                status: "success",
                mensaje: "Te has identificado exitosamente",
                acceso: {

                    user,
                    token

                }

            });

        } else {

            return res.status(500).send({

                status: "error",
                mensaje: "La datos proporcionados no coinciden",
                error: error.message

            });

        }

    } catch (error) {

        return res.status(500).json({

            status: "error",
            mensaje: "Error del servidor al ejecutar el login del usuario",
            error: error.message,

        });

    }
};

module.exports = loginUsersHandler;
