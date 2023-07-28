const bcrypt = require('bcrypt');
const { Users } = require('../../db');
const loginUserController = async (email, password) => {

    if (email && password) {

        const findUser = await Users.findOne({ where: { email:email } });

        if (findUser) {

            const pwdMatch = await bcrypt.compareSync(password, findUser.password);

            if (pwdMatch) {

                delete findUser.dataValues.password;

                return findUser;

            }
        }
    }

};

module.exports = loginUserController;
