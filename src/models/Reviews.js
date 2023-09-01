const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "reviews",
        {
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rating: {
                //validar que solo sea entre 1 y 5
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    max: 5,
                    min: 1,
                },
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        { timestamps: true }
    );
};
