// 1. Registrar usuario
const registerUser = require('./registerUserController');
// 2. Obtener usuarios
const getUsers = require('./getUsersController');
// 3. Login usuario
const loginUsers = require('./loginUserController');
//4. Delete Usuario
const deleteUser = require("./deleteUserController");

const UsersControllers = {
    registerUser,
    getUsers,
    loginUsers,
    deleteUser
};

module.exports = UsersControllers;
