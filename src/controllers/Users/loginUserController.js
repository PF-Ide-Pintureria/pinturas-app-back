const bcrypt = require('bcrypt');
const { Users } = require('../../db');
const { createToken } = require("../../services/");


const loginUserController = async (email, password) => {

    if (email && password) {

        const findUser = await Users.findOne({ where: { email: email } });

        let user, token;

        if (findUser) {

            const pwdMatch = bcrypt.compareSync(password, findUser.password);

            if (pwdMatch) {

                token = createToken(findUser);

            }

            user = {
                ...findUser.dataValues,
                [password]: undefined
            };
        }

        return { user, token };
    }

};

module.exports = loginUserController;
