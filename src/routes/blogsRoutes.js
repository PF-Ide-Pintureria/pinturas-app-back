const { Router } = require("express");
const { BlogsHandlers } = require("../handlers/");
const { blogsUploads } = require("../middlewares/");
// const { requiresAuth } = require("express-openid-connect");
// const auth = require("../middlewares/auth");

const router = Router();

// console.log(BlogsHandlers);
// // 1. POST /blogs/create
// router.post("/create", BlogsHandlers.createBlogs);


// 1. POST /blogs
router.post("/:userId", [blogsUploads.single("image")], BlogsHandlers.createBlogs);
// 2. DELETE /blogs/:id
router.delete("/:id", BlogsHandlers.deleteBlogs);
// 3. GET /details/:id
router.get("/details/:id", BlogsHandlers.getBlogsById);
// 4. GET /blogs
router.get("/", BlogsHandlers.getAllBlogs);
//5. PUT /blogs
router.put("/:id", [blogsUploads.single("image")], BlogsHandlers.putBlog);


module.exports = router;
