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
            allowNull: true //de momento para facilitar pruebas
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true //de momento para facilitar pruebas
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true //de momento para facilitar pruebas
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true //de momento para facilitar pruebas
        },
        patent: {
            type: DataTypes.STRING,
            allowNull: true //de momento para facilitar pruebas
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true //de momento para facilitar pruebas
        },
        featured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true //de momento para facilitar pruebas
        },
        package: {
            type: DataTypes.STRING,
            allowNull: true //de momento para facilitar pruebas
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true //de momento para facilitar pruebas
        },
        promotion: {
            type: DataTypes.INTEGER, //podria ser un valor como descuento
            allowNull: true //de momento para facilitar pruebas
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true //de momento para facilitar pruebas
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
        { timestamps: true });
};
