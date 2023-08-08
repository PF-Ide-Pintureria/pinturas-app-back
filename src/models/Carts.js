const { DataTypes, UUIDV4: v4 } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('carts', {
        idCart: {
            type: DataTypes.UUID,
            defaultValue: v4,
            primaryKey: true
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        }
    }, {
        timestamps: true,
    });
};
