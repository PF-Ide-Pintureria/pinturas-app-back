const { Categories } = require('../../db');


const resetCategoriesController = async () => {
    try {
        await Categories.sync({ force: true });
        console.log('Modelo categorías reseteado correctamente :)');
    }
    catch (error) {
        console.error(error);
    }
};

resetCategoriesController();


module.exports = resetCategoriesController;
