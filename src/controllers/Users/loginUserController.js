const bcrypt = require('bcrypt');
const { Users } = require('../../db');
const { createToken } = require("../../services/");

const loginUserController = async (email, password) => {

    let findUser, token;

    if (email && password) {

        const findUser = await Users.findOne({ where: { email: email } });

        if (findUser) {

            const pwdMatch = bcrypt.compareSync(password, findUser.password);

            if (pwdMatch) {

                delete findUser.dataValues.password;

                //Crear token
                const token = createToken(findUser);

            }
        }
    }

    return { findUser, token };

};

module.exports = loginUserController;
