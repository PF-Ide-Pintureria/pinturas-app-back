function createRelations(sequelizeInstance) {

    // En sequelize.models están todos los modelos importados como propiedades
    // Para relacionarlos hacemos un destructuring
    const {
        Blogs, Products, Reviews, Users, Orders, Carts,
    } = sequelizeInstance.models;

    // Aca vendrian las relaciones:

    // FAVORITOS
    // un usuario puede tener muchos productos favoritos y un producto puede ser favorito para muchos usuarios.
    Users.belongsToMany(Products, { through: "favorite_products", foreignKey: "userId" });
    Products.belongsToMany(Users, { through: "favorite_products", foreignKey: "productId" });
    // BLOGS
    // un usuario puede tener varios blogs, pero cada blog pertenece a un único usuario
    // USERS <-> BLOGS
    Users.hasMany(Blogs);
    Blogs.belongsTo(Users);

    // USERS <-> ORDERS

    Users.hasMany(Orders);
    Orders.belongsTo(Users);

    // REVIEWS <-> ORDERS
    // Una orden tiene una review
    // Una review pertenece a una orden
    Orders.hasOne(Reviews);
    Reviews.belongsTo(Orders);


    // PRODUCTS <-> CATEGORIES
    // Un producto puede pertenecer a una categorías
    // y una categoría puede tener muchos productos.
    // Products.belongsTo(Categories, { as: "productCategory" });
    // Categories.hasMany(Products);

    // USERS <-> CARTS
    // Un usuario puede tener un carrito
    // y un carrito pertenece a un único usuario.
    Users.hasOne(Carts);
    Carts.belongsTo(Users);


    return sequelizeInstance;

}

module.exports = {
    createRelations
};
