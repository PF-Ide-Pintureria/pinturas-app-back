const { Users } = require('../../db');
const bcrypt = require("bcrypt");


const registerUserController = async ({ email, password, rol = "client", name,
    lastName, address, locality, province, phone }) => {

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    const newUser = await Users.create({
        email,
        password,
        rol,
        name,
        lastName,
        address,
        locality,
        province,
        phone
    });

    return {
        id: newUser.id,
        email: newUser.email,
        rol: newUser.rol,
        idUser: newUser.idUser,
        idCart: newUser.idCart,
    };

};

module.exports = registerUserController;
