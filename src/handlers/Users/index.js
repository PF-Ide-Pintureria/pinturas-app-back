// 1. Registrar usuario
const registerUser = require('./registerUserHandler');
// 2. Obtener usuarios
const getUsers = require('./getUsersHandler');
// 3. Login usuario
const loginUsers = require('./loginUserHandler');
//4. Delete Usuario
const deleteUser = require("./deleteUserHandler");
//5. Actualizar usuario
const putUser = require("./putUserHandler");
//6. Mi perfil
const profileUser = require("./myProfileHandler.js");
//7. Registrar usuario con authZero
const registerUserAuthZero = require("./registerUserAuthZeroHandler");

const UserHandlers = {
    registerUser,
    getUsers,
    loginUsers,
    deleteUser,
    putUser,
    profileUser,
    registerUserAuthZero
};

module.exports = UserHandlers;
