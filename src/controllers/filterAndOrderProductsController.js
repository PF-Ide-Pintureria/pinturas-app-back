const { Op } = require('sequelize');
const { Products } = require('../db.js');

const PRODUCTS_PER_PAGE = 12;

  const filterAndOrderProductsController = async (

  category,
  lowPrice, highPrice,
  minRating, maxRating,
  minStock, maxStock,
  page,
  color,
  active,
  limit,
  sortBy,
  orderBy,

  ) => {

  const pageSet = page || 1; // Página actual, por defecto 1

  const offset = (pageSet - 1) * PRODUCTS_PER_PAGE;

  // Construir la condición de búsqueda para los términos proporcionados
  let searchCondition = {
    // Búsqueda por categoría si se proporciona una categoría específica
    ...(category && { 

        category: category }),
        
    /* // Búsqueda por color
    ...(color && {
        
        color: color }),

    // Búsqueda por activos
    ...(active  && { 
        
        active: active }),

    // Búsqueda por rango de precios
    ...(lowPrice && maxPrice && {

        price: {
            [Op.between]: [lowPrice, highPrice],
        },

        }),
    ...(lowPrice && !highPrice && {

        price: {
            [Op.gte]: lowPrice,
        },
        }),
        ...(highPrice && !lowPrice && {
        precio: {
            [Op.lte]: highPrice,
        },
        }),
    // Búsqueda por rating
    ...(minRating && maxRating && {

        rating: {
            [Op.between]: [minRating, maxRating],
        },

        }),
    ...(minRating && !maxRating && {

        rating: {
            [Op.gte]: minRating,
        },
        }),
        ...(maxRating && !minRating && {
        prating: {
            [Op.lte]: maxRating,
        },
        }),  
        // Búsqueda por stock
    ...(minStock && maxStock && {

        stock: {
            [Op.between]: [minStock, maxStock],
        },

        }),
    ...(minStock && !maxStock && {

        stock: {
            [Op.gte]: minStock,
        },
        }),
        ...(maxStock && !minStock && {
        stock: {
            [Op.lte]: maxStock,
        },
        }),   */

    };
   
    let products = await Products.findAndCountAll({
      where: searchCondition,
      //limit: PRODUCTS_PER_PAGE,
      offset: offset,

    });
   
    // Consulta adicional para obtener la cantidad total de resultados
    const totalResults = await Products.count({ where: searchCondition });

    // Calcular la cantidad total de páginas
    const totalPages = Math.ceil(totalResults / PRODUCTS_PER_PAGE);

    if (products.length === 0) {
      throw new Error('No se encontraron resultados. Prueba de otra manera.');
    }

    return {
      results: products,
      pages: totalPages,
    };

};

module.exports = filterAndOrderProductsController;