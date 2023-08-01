const bcrypt = require('bcrypt');
const { Users } = require('../../db');
const createToken = require("../../services/jwt");


const loginUserController = async (email, password) => {

    if (email && password) {

        const findUser = await Users.findOne({ where: { email: email } });

        if (!findUser) throw new Error("El usuario no existe");

        if (findUser.dataValues.isBanned === true) throw new Error("El usuario se encuentra bloqueado");

        if (findUser.dataValues.active === false) throw new Error("El usuario ha sido eliminado");

        let user, token, userToToken;

        if (findUser) {

            const pwdMatch = bcrypt.compareSync(password, findUser.password);

            if (pwdMatch) {

                delete findUser.password;

                userToToken = {
                    email: findUser.dataValues.email,
                    name: findUser.dataValues.name,
                    rol: findUser.dataValues.rol
                };

                token = createToken(userToToken);

                user = findUser.dataValues;

            }

        }

        return { user, token };
    }

};

module.exports = loginUserController;
