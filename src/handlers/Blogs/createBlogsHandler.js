const { BlogsControllers } = require("../../controllers");
const { createBlogs } = BlogsControllers;
const { uploadImage } = require("../../services/");

const createBlogsHandler = async (req, res) => {
    try {
        if (req.file) {
            const secure_url = await uploadImage(req.file);

            req.body.image = secure_url;
        }
        const { userId } = req.params;
        const postBlog = await createBlogs(req.body, userId);
        // console.log(postBlog);

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
