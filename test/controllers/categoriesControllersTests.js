// const { Categories } = require('../../src/db.js');
const { expect } = require('chai');

const { CategoriesControllers } = require('../../src/controllers');


const categoriesControllersTests = () => {

    describe('Get categories controller', () => {

        before(async () => {
            // await Categories.sync({ alter: true });
        });

        it('Should get all categories', async () => {
            const categories = await CategoriesControllers.getCategories();
            expect(categories).to.be.an('array');
        });

    });

};


module.exports = categoriesControllersTests;
