const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('products', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4, //genero un identificador unico universal v4
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        { timestamps: false });
};
