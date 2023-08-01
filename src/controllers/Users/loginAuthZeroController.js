const { Users } = require('../../db');
const { createToken } = require("../../services");


const loginAuthZeroController = async (user) => {

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

    let userToToken = {

        email: newUser.email,
        name: newUser.given_name,
        rol: newUser.rol
    };

    token = createToken(userToToken);

    return {

        user: createdUser,
        token: token

    };

};


module.exports = loginAuthZeroController;
