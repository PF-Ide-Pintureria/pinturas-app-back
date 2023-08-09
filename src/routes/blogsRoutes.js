const { Router } = require("express");
const { BlogsHandlers } = require("../handlers/");
const { blogsUploads } = require("../middlewares/");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/routesProtection");

const router = Router();

// 1. POST /blogs
router.post(
  "/",
  [blogsUploads.single("image"), auth, isAdmin],
  BlogsHandlers.createBlogs
);
// 2. DELETE /blogs/:id
router.delete("/:id", auth, [isAdmin], BlogsHandlers.deleteBlogs);
// 3. GET /details/:id
router.get("/details/:id", BlogsHandlers.getBlogsById);
// 4. GET /blogs
router.get("/", BlogsHandlers.getAllBlogs);
//5. PUT /blogs
router.put(
  "/:id",
  [blogsUploads.single("image"), auth, isAdmin],
  BlogsHandlers.putBlog
);

module.exports = router;
