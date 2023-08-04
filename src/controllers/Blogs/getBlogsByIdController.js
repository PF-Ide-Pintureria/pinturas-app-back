const { Blogs } = require("../../db.js");

const getBlogsByIdController = async (id) => {
  const blog = await Blogs.findByPk(id);
  return blog;
};

module.exports = getBlogsByIdController;
