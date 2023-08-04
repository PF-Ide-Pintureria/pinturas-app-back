const { BlogsControllers } = require("../../controllers");
const { createBlogs } = BlogsControllers;

const createBlogsHandler = async (req, res) => {
  try {
    const postBlog = await createBlogs(req.body);

    return res.status(201).json({
      status: "success",
      message: "Blog creado correctamente",
      blog: postBlog,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createBlogsHandler;
