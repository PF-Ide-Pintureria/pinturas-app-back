const { Router } = require('express');
const { UsersHandlers } = require('../handlers/');

const router = Router();

// 1. POST /users/register
router.post('/register', UsersHandlers.registerUser);

// 2. GET /users
router.get('/', UsersHandlers.getUsers);

// 3. POST /users/login
router.post('/login', UsersHandlers.loginUsers);

//4. DELETE /users
router.delete("/:id", UsersHandlers.deleteUser);

module.exports = router;
