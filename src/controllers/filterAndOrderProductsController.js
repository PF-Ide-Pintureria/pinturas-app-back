const { Products } = require('../db.js');

const productsPerPage = 10;


const filterAndOrderProductsController =
    async (name, category,
        lowPrice, highPrice,
        minRating, maxRating,
        minStock, maxStock,
        limit, page,
        color, active,
        sortBy, orderBy
    ) => {
        // si no se especifica un nombre, se devuelven todos los productos
        let filteredProducts = await Products.findAll();
        // si se especifica un nombre, se filtran los productos por nombre
        if (name) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.name.toLowerCase().includes(name.toLowerCase());
            });
        };
        // si se especifica una categoría, se filtran los productos por
        // categoría
        if (category) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.category === category;
            });
        };
        // si se especifica un precio mínimo, se filtran los productos por
        // precio mínimo
        if (lowPrice) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.price >= lowPrice;
            });
        };
        // si se especifica un precio máximo, se filtran los productos por
        // precio máximo
        if (highPrice) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.price <= highPrice;
            });
        };
        // si se especifica una calificación mínima, se filtran los productos
        // por calificación mínima
        if (minRating) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.rating >= minRating;
            });
        };
        // si se especifica una calificación máxima, se filtran los productos
        // por calificación máxima
        if (maxRating) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.rating <= maxRating;
            });
        };
        // si se especifica un stock mínimo, se filtran los productos por
        // stock mínimo
        if (minStock) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.stock >= minStock;
            });
        };
        // si se especifica un stock máximo, se filtran los productos por
        // stock máximo
        if (maxStock) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.stock <= maxStock;
            });
        };
        // si se especifica un color, se filtran los productos por color
        if (color) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.color === color;
            });
        };
        // si se especifica un estado, se filtran los productos por estado
        // console.log('active: ', active);
        if (active === true || active === 'true') {
            filteredProducts = filteredProducts.filter((product) => {
                // console.log('product.active: ', product.active);
                return product.active;
            });
        };
        // si se especifica un orden, se ordenan los productos por orden
        if (sortBy && orderBy) {
            const validSortBy = ['name', 'price', 'rating', 'stock'];
            const validOrderBy = ['asc', 'desc'];
            if (!validSortBy.includes(sortBy) ||
                !validOrderBy.includes(orderBy)) {
                throw new Error('Invalid sortBy or orderBy');
            };
            compareFunc = sortBy === 'name' ? (a, b) => {
                if (orderBy === 'asc') {
                    return a[sortBy].localeCompare(b[sortBy]);
                } else {
                    return b[sortBy].localeCompare(a[sortBy]);
                };
            } : (a, b) => {
                if (orderBy === 'asc') {
                    return a[sortBy] - b[sortBy];
                } else {
                    return b[sortBy] - a[sortBy];
                };
            };
            filteredProducts.sort(compareFunc);
        };
        // añadir paginación
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        filteredProducts = filteredProducts.map((product, index) => {
            return {
                ...product.dataValues,
                page: Math.ceil((index + 1) / productsPerPage),
                totalPages,
            };
        });
        // si se especifica una página, se devuelven los productos de esa
        // página
        if (page) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.page === parseInt(page);
            });
        };
        // si se especifica un límite, se limita la cantidad de productos
        // devueltos
        if (limit) {
            filteredProducts = filteredProducts.slice(0, limit);
        };
        return filteredProducts;
    };


module.exports = filterAndOrderProductsController;
