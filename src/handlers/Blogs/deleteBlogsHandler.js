const { BlogsControllers } = require("../../controllers");
const { deleteBlogs } = BlogsControllers;

const deleteBlogsHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlogs = await deleteBlogs(id);
    console.log(deletedBlogs);

    return res.status(200).json({
      status: "success",
      message: "Blog borrado correctamente",
      blogDELETED: deletedBlogs,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteBlogsHandler;
