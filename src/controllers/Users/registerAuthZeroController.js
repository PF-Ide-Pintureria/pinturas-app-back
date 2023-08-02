const { Users } = require('../../db');
const { createToken } = require("../../services/");

const registerAuthZeroController = async (user) => {

    let token;

    let newUser = {

        email: user.email,
        rol: "cliente",
        name: user.given_name,
        lastName: user.family_name,
        image: user.picture,
        authZero: "true",

    };

    const createdUser = await Users.findOrCreate({

        where: {

            ...newUser

        },

    });

    const userToToken = {

        email: user.email,
        rol: "cliente",
        name: user.given_name,

    };

    token = createToken(userToToken);

    return {

        createdUser,
        token: token

    };

};

module.exports = registerAuthZeroController;