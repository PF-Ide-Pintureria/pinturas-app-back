const { Users } = require('../../db');
const getUserByIdController = async (id) => {

    if (id) {
        const findUser = await Users.findByPk(id);
        if (!findUser) throw Error("USUARIO NO ENCONTRADO");

        delete findUser.dataValues.password;

        return findUser.dataValues;

    }
};

module.exports = getUserByIdController;
