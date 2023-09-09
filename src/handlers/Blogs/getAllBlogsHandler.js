const { BlogsControllers } = require("../../controllers");
const { getAllBlogs } = BlogsControllers;

const getAllBlogsHandler = async (req, res) => {
    try {
        const blogs = await getAllBlogs();
        return res.status(200).json({
            status: "success",
            blogs: blogs,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getAllBlogsHandler;
