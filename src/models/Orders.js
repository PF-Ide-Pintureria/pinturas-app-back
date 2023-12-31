const { DataTypes, UUIDV4: v4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('orders', {
        id: {
            type: DataTypes.UUID,
            defaultValue: v4,
            primaryKey: true
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            defaultValue: []
        },
        meliQuery: {
            type: DataTypes.STRING
        },
        meliBody: {
            type: DataTypes.STRING
        },
        total: {
            type: DataTypes.FLOAT
        },
        state: {
            type: DataTypes.STRING,
            defaultValue: "pending"
        }
    }, {
        timestamps: true,
    });
};
