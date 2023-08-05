const { Blogs } = require("../../db.js");

const createBlogsController = async (blog, userId) => {
    console.log(userId);
    return Blogs.findOrCreate({
        where: {
            ...blog,
        },
    });
};

module.exports = createBlogsController;
