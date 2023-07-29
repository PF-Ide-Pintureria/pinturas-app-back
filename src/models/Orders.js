const { DataTypes, UUIDV4: v4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('orders', {
        idOrder: {
            type: DataTypes.UUID,
            defaultValue: v4,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT
        }
    }, {
        timestamps: true,
    });
};
