const { BlogsControllers } = require("../../controllers");
const { getBlogsById } = BlogsControllers;

const getBlogsByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await getBlogsById(id);

    if (!blog)
      return res.status(404).json({
        status: "fail",
        message: "Blog no encontrado",
      });

    return res.status(200).json({
      status: "success",
      blog: blog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getBlogsByIdHandler;
