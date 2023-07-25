const { Products } = require('../db.js');
const { Op } = require('sequelize');

const getProductByNameController = async (name) => {
    // devolvemos todos los productos que tengan coincidencia parcial con el
    // nombre
    return await Products.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            },
        },
    });
};

module.exports = getProductByNameController;
