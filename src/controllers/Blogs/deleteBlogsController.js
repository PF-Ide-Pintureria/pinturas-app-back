const { Blogs } = require("../../db.js");

const deleteBlogsController = async (id) => {
  // Buscar el blog por su ID en la base de datos
  const blog = await Blogs.findByPk(id);

  if (!blog) throw Error("BLOG NO ENCONTRADO");

  await blog
    .update({ active: false })
    .then((blogDeleted) => blogDeleted)
    .catch((error) => {
      throw error;
    });
};

module.exports = deleteBlogsController;
