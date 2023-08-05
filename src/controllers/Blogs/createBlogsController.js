const { Blogs, Users } = require("../../db.js");

const createBlogsController = async (blog, userId) => {
    const userPost = Users.findByPk(userId);
    if (!userPost) throw Error("No se encontro el usuario");

    //console.log(userId);
    return Blogs.findOrCreate({
        where: {
            ...blog,
        },
    });
};

module.exports = createBlogsController;
