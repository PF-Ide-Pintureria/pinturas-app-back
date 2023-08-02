// 1. Registrar usuario
const registerUser = require('./registerUserController');
// 2. Obtener usuarios
const getUsers = require('./getUsersController');
// 3. Login usuario
const loginUsers = require('./loginUserController');
//4. Delete Usuario
const deleteUser = require("./deleteUserController");
//5. Actualizar usuario
const putUser = require("./putUserController");
//6. Register Auth0
const registerAuth0 = require("./registerAuthZeroController");
//7. Obtener usuario por id
const getUserById = require("./getUserByIdController");

const UsersControllers = {
    registerUser,
    getUsers,
    loginUsers,
    deleteUser,
    putUser,
    registerAuth0,
    getUserById
};

module.exports = UsersControllers;
