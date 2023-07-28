const { UsersControllers } = require('../../controllers');
const { loginUsers } = UsersControllers;

const createToken = require("../../services/jwt")

const loginUserHandler = async (req, res) => {

    const { email, password } = req.body;

    console.log('email:', email);
    console.log('password:', password);

    //Buscar en bd si existe y comparar contraseña
    if (!email || !password) {

        return res.status(400).json({

            status: "error",
            mensaje: "Faltan datos por enviar"

        });

    }

    try {

        const findUser= await loginUsers(email, password);

        if (findUser) {

            const token = await createToken(findUser)

            //Devolver datos
            return res.status(200).json({

                status: "success",
                mensaje: "Te has identificado exitosamente",
                acceso: {

                    user: findUser,
                    token: token

                }

            });

        } else {

            return res.status(400).send({

                status: "error",
                mensaje: "La datos proporcionados no coinciden"

            });

        }

    } catch (error) {

        console.error(error);
        return res.status(500).json({

            status: "error",
            mensaje: "Error del servidor al ejecutar el login del usuario",

        });

    }
};


module.exports = loginUserHandler;
