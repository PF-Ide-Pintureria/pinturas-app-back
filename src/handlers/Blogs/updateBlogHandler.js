const { BlogsControllers } = require("../../controllers");
const { updateBlog } = BlogsControllers;
const { uploadImage } = require("../../services/");

const updateBlogHandler = async (req, res) => {

    try {

        const { id } = req.params;

        if (req.file) {

            const secure_url = await uploadImage(req.file);

            req.body.image = secure_url;

        }

        const blogUpdated = await updateBlog(id, req.body);

        return res.status(201).json({
            status: "success",
            message: "Blog editado exitosamente",
            blog: blogUpdated
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

};

module.exports = updateBlogHandler;