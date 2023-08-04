const { Router } = require("express");
const { BlogsHandlers } = require("../handlers/");
const { requiresAuth } = require("express-openid-connect");
const auth = require("../middlewares/auth");

const router = Router();

// 1. POST /blogs
router.post("/", BlogsHandlers.createBlogs);
// 2. DELETE /blogs/:id
router.delete("/:id", BlogsHandlers.deleteBlogs);
// 3. GET /details/:id
router.get("/details/:id", BlogsHandlers.getBlogsById);



module.exports = router;
