const { DataTypes, UUIDV4: v4 } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('categories', {
        idCategory: {
            type: DataTypes.UUID,
            defaultValue: v4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
        { timestamps: true });

};
