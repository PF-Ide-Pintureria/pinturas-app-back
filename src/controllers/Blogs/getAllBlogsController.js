const { Blogs } = require("../../db");

const getAllBlogsController = async () => {

    return await Blogs.findAll();
};

module.exports = getAllBlogsController;
