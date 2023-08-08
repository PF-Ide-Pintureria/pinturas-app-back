const { Users } = require("../../db");

const deleteUserController = async (id) => {
    const user = await Users.findByPk(id);

    if (!user) throw Error("USUARIO NO ENCONTRADO");

    await user.update({ active: false });
    delete user.dataValues.password;
    return user.dataValues;
};

module.exports = deleteUserController;
