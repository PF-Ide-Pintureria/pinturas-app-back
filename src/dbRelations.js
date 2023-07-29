function createRelations(sequelizeInstance) {

    // En sequelize.models están todos los modelos importados como propiedades
    // Para relacionarlos hacemos un destructuring
    const { Blogs, Products, Reviews, Users } = sequelizeInstance.models;

    // Aca vendrian las relaciones:
    //FAVORITOS
    // un usuario puede tener muchos productos favoritos y un producto puede ser favorito para muchos usuarios.
    Users.belongsToMany(Products, { through: "favorite_products" });
    Products.belongsToMany(Users, { through: "favorite_products" });
    //BLOGS
    //un usuario puede tener varios blogs, pero cada blog pertenece a un único usuario
    Users.hasMany(Blogs);
    Blogs.belongsTo(Users);
    //REVIEWS
    //un usuario puede realizar muchas reseñas pero cada reseña esta asociada a un unico producto
    Users.hasMany(Reviews);
    Reviews.belongsTo(Users);

    Products.hasMany(Reviews);
    Reviews.belongsTo(Products);

    return sequelizeInstance;

}


module.exports = {
    createRelations
};
