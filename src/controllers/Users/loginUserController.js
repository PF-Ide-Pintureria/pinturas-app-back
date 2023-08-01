const bcrypt = require('bcrypt');
const { Users } = require('../../db');
const createToken = require("../../services/jwt");


const loginUserController = async (email, password) => {

    if (email && password) {

        const findUser = await Users.findOne({ where: { email: email } });

        let user, token;

        if (findUser) {

            const pwdMatch = bcrypt.compareSync(password, findUser.password);

            if (pwdMatch) {

                delete findUser.password;

                user = {
                    email: findUser.dataValues.email,
                    name: findUser.dataValues.name,
                    rol: findUser.dataValues.rol,
                };

                token = createToken(user);

            }


        }

        return { user, token };
    }

};

module.exports = loginUserController;
