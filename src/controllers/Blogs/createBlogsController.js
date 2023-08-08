const { Blogs, Users } = require("../../db.js");

const createBlogsController = async (blog, userId) => {
    const user = await Users.findByPk(userId);

    if (!user) throw Error("No se encontro el usuario");

    const newBlog = await Blogs.create(blog);

    await user.addBlog(newBlog);

    return await user.getBlogs();

};

module.exports = createBlogsController;
