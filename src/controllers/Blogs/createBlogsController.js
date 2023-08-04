const { Blogs } = require("../../db.js");

const createBlogsController = async (blog) => {
  return Blogs.findOrCreate({
    where: {
      ...blog,
    },
  });
};

module.exports = createBlogsController;
