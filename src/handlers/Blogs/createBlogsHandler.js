const { BlogsControllers } = require("../../controllers");
const { createBlogs } = BlogsControllers;
const { uploadImage } = require("../../services/");
const decodedToken = require("../../services/decodedJwt");

const createBlogsHandler = async (req, res) => {

    const authorization = decodedToken(req);

    console.log(authorization);

    if (authorization.rol !== "admin") {

        return res.status(500).json({
            status: "error",
            message: "No cuentas con los permisos para esta sección"
        });
    }

    try {
        if (req.file) {
            const secure_url = await uploadImage(req.file);

            req.body.image = secure_url;
        }

        const postBlog = await createBlogs(req.body, authorization.id);

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
