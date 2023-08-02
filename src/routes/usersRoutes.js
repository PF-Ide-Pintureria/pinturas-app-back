const { Router } = require('express');
const { UsersHandlers } = require('../handlers/');
const { requiresAuth } = require('express-openid-connect');
const auth = require("../middlewares/auth");

const router = Router();

// 1. POST /users/register
router.post('/register', UsersHandlers.registerUser);

// 2. GET /users
router.get('/', UsersHandlers.getUsers);

// 3. POST /users/login
router.post('/login', UsersHandlers.loginUsers);

//4. DELETE /users/:id
router.delete("/:id", UsersHandlers.deleteUser);

//5. PUT /users/:id
router.put("/:id", UsersHandlers.putUser);

//6.  GET /users/profile
router.get("/profile", [auth], UsersHandlers.myProfile);

//7. GET /users/registered-authzero
router.get("/registered-authzero", [requiresAuth()], UsersHandlers.registerUserAuthZero);

//8. GET /users/login-authzero
router.get("/login-authzero", [requiresAuth()], UsersHandlers.loginUserAuthZero);


module.exports = router;