const { BlogsControllers } = require("../../controllers");
const { deleteBlogs } = BlogsControllers;
const decodedToken = require("../../services/decodedJwt");

const deleteBlogsHandler = async (req, res) => {

    const authorization = decodedToken(req);

    if (authorization.rol !== "admin") {

        return res.status(500).json({
            status: "error",
            message: "No cuentas con los permisos para esta sección"
        });
    }
    try {
        const { id } = req.params;
        const deletedBlogs = await deleteBlogs(id);

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
