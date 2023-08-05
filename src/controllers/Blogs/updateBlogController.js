const { Blogs } = require("../../db.js");
const updateBlogController = async (id, content) => {

    if (id) {

        const findBlog = await Blogs.findByPk(id);

        if (!findBlog) throw Error("El artículo solicitado no fue encontrado");

        findBlog.update(content);

        return userToEdit.dataValues;

    }

};

module.exports = updateBlogController;