const { DataTypes, UUIDV4: v4 } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "blogs",
        {
            idBlog: {
                type: DataTypes.UUID,
                defaultValue: v4,
                allowNull: false,
                primaryKey: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        { timestamps: true }
    );
};
