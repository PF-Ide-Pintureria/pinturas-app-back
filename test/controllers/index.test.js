const {
    createProductController, destroyProductController,
    deleteProductController, editProductController,
    getAllProductsController, getProductByIdController,
    getProductByNameController, getCategoriesController,
} = require('../../src/controllers');
const { conn, Products } = require('../../src/db.js');
const { expect } = require('chai');


const testProduct = {
    name: 'Test product',
    price: 100,
    code: '1234',
    category: 'Test category',
    description: 'Test description',
    patent: 'Test patent',
    stock: 10,
    image: 'Test image',
    featured: true,
    package: 'Test package',
    promotion: 10,
    color: 'Test color',
    rating: 5,
    active: true,
};


describe('CONTROLLERS', () => {

    // Conexión a la base de datos
    before(() => conn.authenticate().catch((err) => {
        console.error('Unable to connect to the database:', err);
    }));

    // Crear la tabla de productos
    before(() => Products.sync({ force: false }));

    describe('Create product controller', () => {

        // Crear el producto
        it('Should create a product', async () => {
            const [product] = await createProductController(testProduct);
            expect(product).to.have.property('idProduct');
            testProduct.idProduct = product.idProduct;
        });

        // Eliminar el producto creado
        after(async () => {
            await destroyProductController(testProduct.idProduct);
        });

    });


    describe('Delete product controller', () => {

        // Crear un producto
        before(async () => {
            const [product] = await createProductController(testProduct);
            expect(product).to.have.property('idProduct');
            testProduct.idProduct = product.idProduct;
        });

        // Eliminar el producto creado
        it('Should delete a product', async () => {
            await deleteProductController(testProduct.idProduct);
            // Ahora el producto debería estar inactivo
            const product = await Products.findByPk(testProduct.idProduct);
            expect(product.active).to.be.false;
        });

        // Destruye el producto creado
        after(async () => {
            await destroyProductController(testProduct.idProduct);
        });

    });


    describe('Edit product controller', () => {

        // Crear un producto
        before(async () => {
            const [product] = await createProductController(testProduct);
            expect(product).to.have.property('idProduct');
            testProduct.idProduct = product.idProduct;
        });

        // Editar el producto creado
        it('Should edit a product', async () => {
            const editedProduct = await editProductController(
                testProduct.idProduct,
                { ...testProduct, name: 'Edited test product', });
            expect(editedProduct.name).to.equal('Edited test product');
        });

        // Destruye el producto creado
        after(async () => {
            await destroyProductController(testProduct.idProduct);
        });

    });

    describe('Get all products controller', () => {

        it('Should get all products', async () => {
            const products = await getAllProductsController();
            expect(products).to.be.an('array');
        });

    });

    describe('Get product by id controller', () => {

        it('Should get a product by id', async () => {
            const id = 1;
            const product = await getProductByIdController(id);
            expect(product).to.have.property('idProduct');
            expect(product.idProduct).to.equal(id);
        });

    });

    describe('Get product by name controller', () => {

        before(async () => {
            const [product] = await createProductController(testProduct);
            expect(product).to.have.property('idProduct');
            testProduct.idProduct = product.idProduct;
        });

        it('Should get a product by name', async () => {
            const name = testProduct.name;
            const product = await getProductByNameController(name);
            expect(product).to.be.an('array');
            expect(product[0].name).to.equal(name);
        });

        after(async () => {
            await destroyProductController(testProduct.idProduct);
        });

    });

    describe('Get categories controller', () => {

        it('Should get all categories', async () => {
            const categories = await getCategoriesController();
            expect(categories).to.be.an('array');
        });

    });

});
