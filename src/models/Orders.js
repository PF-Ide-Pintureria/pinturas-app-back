const { DataTypes, UUIDV4: v4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('orders', {
        idOrder: {
            type: DataTypes.UUID,
            defaultValue: v4,
        },
        idUser: {
            type: DataTypes.UUID,
            defaultValue: v4,
            allowNull: true
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        subtotal: {
            type: DataTypes.FLOAT
        },
        total: {
            type: DataTypes.FLOAT
        },
        state: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
    });
};
