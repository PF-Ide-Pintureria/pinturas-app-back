const { Users } = require('../db');
const bcrypt = require("bcrypt");

const registerUserController = async (email, password, rol, name, lastName, adress, locality, province, phone) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    const newUser = await Users.create({
        email,
        password,
        rol,
        name,
        lastName,
        adress,
        locality,
        province,
        phone
    });

    return newUser;

};

module.exports = registerUserController;
