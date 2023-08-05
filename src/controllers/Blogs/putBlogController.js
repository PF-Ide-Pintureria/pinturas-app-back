const { Blogs } = require('../../db.js');

const putBlogController = async (id, blog) => {
    // Buscar el blog por su ID en la base de datos
    const blogToEdit = await Blogs.findByPk(id);

    if (!blogToEdit) throw Error("Blog no encontrado");

    await blogToEdit.update(blog);
    return blogToEdit;
};

module.exports = putBlogController;
