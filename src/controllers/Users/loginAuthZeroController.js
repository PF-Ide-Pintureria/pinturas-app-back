const { Users } = require('../../db');
const { createToken } = require("../../services/jwt");

const loginAuthZeroController = async (user) => {

    let token;

    let findUser = await Users.findOne({

        where: {

            email: user.email

        },

    });

    if (!findUser) {

        findUser = await Users.create({

            email: user.email,
            rol: "client",
            name: user.given_name,
            lastName: user.family_name,
            image: user.picture,
            authZero: "true",

        });

    }

    let userToValidate = { ...findUser.dataValues };

    if (userToValidate.isBanned) throw Error("El usuario se encuentra bloqueado");

    if (userToValidate.active === false) throw Error("El usuario ha sido eliminado");

    let userToToken = {

        email: user.email,
        name: user.given_name,
        rol: user.rol ? user.rol : "client"

    };

    token = createToken(userToToken);

    return {

        user: findUser,
        token: token

    };

};

module.exports = loginAuthZeroController;
