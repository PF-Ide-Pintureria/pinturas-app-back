const { Users } = require("../../db");
const putUserController = async (id, user) => {
    const userToEdit = await Users.findByPk(id);

    if (!userToEdit) throw Error("USUARIO NO ENCONTRADO");

    await userToEdit.update(user);
    delete userToEdit.dataValues.password;
    return userToEdit.dataValues;
};

module.exports = putUserController;
