const { BlogsControllers } = require("../../controllers");
const { putBlog } = BlogsControllers;
const { uploadImage } = require('../../services/');
const decodedToken = require("../../services/decodedJwt");

const putBlogHandler = async (req, res) => {

    const authorization = decodedToken(req);

    if (authorization.rol !== "admin") {

        return res.status(500).json({
            status: "error",
            message: "No cuentas con los permisos para esta sección"
        });
    }

    try {

        const { id } = req.params;
        if (req.file) {

            const secure_url = await uploadImage(req.file);

            req.body.image = secure_url;

        }

        const blog = await putBlog(id, req.body);

        return res.status(201).json({
            status: "success",
            message: "blog editado exitosamente",
            blog: blog
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

};

module.exports = putBlogHandler;
