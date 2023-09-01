const { UsersControllers, CartsControllers } = require('../../controllers');
const { registerUser } = UsersControllers;
const { createCart } = CartsControllers;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*_-]{8,}$/;

const registerUserHandler = async (req, res) => {

    const { email, password, createCartForUser, } = req.body;

    if (!passwordRegex.test(password)) {
        return res.status(404).json({ error: 'La contraseña no cumple con los requisitos de seguridad.' });
    }

    if (!email || !password) {
        return res.status(400).json({

            status: "fail",
            message: "Faltan datos por enviar"

        });
    }

    try {

        const newUser = await registerUser(req.body);
        if (newUser && createCartForUser) {
            await createCart({
                idUser: newUser.id,
            });
        }

        return res.status(200).json({

            status: "success",
            user: newUser,

        });

    } catch (error) {
        if (error.errors[0].type == "Validation error" || error.errors[0].type == "unique violation") {
            return res.status(404).json({ message: error.errors[0].message });
        }
        return res.status(500).json({
            name: error.errors,
            routine: error.routine,
            detail: error.detail,
        });

    }
};

module.exports = registerUserHandler;
