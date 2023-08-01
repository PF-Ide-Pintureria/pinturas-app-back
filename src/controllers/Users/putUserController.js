const { Users } = require("../../db");
const putUserController = async (id, user) => {
    const userToEdit = await Users.findByPk(id);

    if (!userToEdit) throw Error("USUARIO NO ENCONTRADO");

    console.log(userToEdit.dataValues.authZero);

    if (user.email || user.password && userToEdit.dataValues.authZero) throw Error("No es posible actualizar un usuario que se registró por medio de authZero");

    await userToEdit.update(user);
    delete userToEdit.dataValues.password;
    return userToEdit.dataValues;
};

module.exports = putUserController;
