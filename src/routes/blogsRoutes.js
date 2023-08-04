const { Router } = require("express");
const { BlogsHandlers } = require("../handlers/");
const { requiresAuth } = require("express-openid-connect");
const auth = require("../middlewares/auth");

const router = Router();
// console.log(BlogsHandlers);
// // 1. POST /blogs/create
// router.post("/create", BlogsHandlers.createBlogs);

// // 2. GET /blogs
// router.get("/", BlogsHandlers.getBlogs);

// //3. DELETE /blogs/:id
// router.delete("/:id", BlogsHandlers.deleteBlogs);

// //4. PUT /blogs/:id
// router.put("/:id", BlogsHandlers.putBlogs);

module.exports = router;
