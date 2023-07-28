const Controllers = require('../../src/controllers/');
const {
    ProductsControllers, CategoriesControllers, CartsControllers
} = Controllers;

const {
    createProduct, destroyProduct,
    deleteProduct, editProduct,
    getAllProducts, getProductById,
    getProductByName,
} = ProductsControllers;

const { getCategories } = CategoriesControllers;

const { conn, Products, Carts, Users } = require('../../src/db.js');
const { expect } = require('chai');


const generateRandomEmail = () => {
    return Math.random().toString(36).substring(2, 15) + '@gmail.com';
};

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

const testUser = {
    name: "Test user",
    password: "Prueba-1234567@.",
    email: generateRandomEmail(),
    rol: "client",
};


describe('CONTROLLERS', () => {

    // Conexión a la base de datos
    before(() => conn.authenticate().then(() => {
        conn.sync({ force: false });
    }).catch((err) => {
        console.error('Unable to connect to the database:', err);
    }));

    describe('[Products controllers]', () => {

        before(async () => {
            await Products.sync({ alter: true });
        });

        describe('Create product controller', () => {

            // Crear el producto
            it('Should create a product', async () => {
                const [product] = await createProduct(testProduct);
                expect(product).to.have.property('idProduct');
                testProduct.idProduct = product.idProduct;
            });

            // Eliminar el producto creado
            after(async () => {
                await destroyProduct(testProduct.idProduct);
            });

        });


        describe('Delete product controller', () => {

            // Crear un producto
            before(async () => {
                const [product] = await createProduct(testProduct);
                expect(product).to.have.property('idProduct');
                testProduct.idProduct = product.idProduct;
            });

            // Eliminar el producto creado
            it('Should delete a product', async () => {
                await deleteProduct(testProduct.idProduct);
                // Ahora el producto debería estar inactivo
                const product = await Products.findByPk(testProduct.idProduct);
                expect(product.active).to.be.false;
            });

            // Destruye el producto creado
            after(async () => {
                await destroyProduct(testProduct.idProduct);
            });

        });


        describe('Edit product controller', () => {

            // Crear un producto
            before(async () => {
                const [product] = await createProduct(testProduct);
                expect(product).to.have.property('idProduct');
                testProduct.idProduct = product.idProduct;
            });

            // Editar el producto creado
            it('Should edit a product', async () => {
                const editedProduct = await editProduct(
                    testProduct.idProduct,
                    { ...testProduct, name: 'Edited test product', });
                expect(editedProduct.name).to.equal('Edited test product');
            });

            // Destruye el producto creado
            after(async () => {
                await destroyProduct(testProduct.idProduct);
            });

        });

        describe('Get all products controller', () => {

            it('Should get all products', async () => {
                const products = await getAllProducts();
                expect(products).to.be.an('array');
            });

        });

        describe('Get product by id controller', () => {

            // Crear un producto
            before(async () => {
                const [product] = await createProduct(testProduct);
                expect(product).to.have.property('idProduct');
                testProduct.idProduct = product.idProduct;
            });

            it('Should get a product by id', async () => {
                const id = testProduct.idProduct;
                const product = await getProductById(id);
                expect(product).to.have.property('idProduct');
                expect(product.idProduct).to.equal(id);
            });

            // Destruye el producto creado
            after(async () => {
                await destroyProduct(testProduct.idProduct);
                delete testProduct.idProduct;
            });

        });

        describe('Get product by name controller', () => {

            before(async () => {
                const [product] = await createProduct(testProduct);
                expect(product).to.have.property('idProduct');
                testProduct.idProduct = product.idProduct;
            });

            it('Should get a product by name', async () => {
                const name = testProduct.name;
                const product = await getProductByName(name);
                expect(product).to.be.an('array');
                expect(product[0].name).to.equal(name);
            });

            after(async () => {
                await destroyProduct(testProduct.idProduct);
            });

        });

    });


    describe('[Categories controllers]', () => {

        describe('Get categories controller', () => {

            it('Should get all categories', async () => {
                const categories = await getCategories();
                expect(categories).to.be.an('array');
            });

        });

    });

    describe('[Carts Controllers]', () => {

        let cart;
        let idUser;

        before(async () => {
            await Carts.sync({ alter: true });
            await Users.sync({ alter: true });
            const [user] = await Users.findOrCreate({
                where: { email: testUser.email },
                defaults: testUser,
            });
            idUser = user.id;
            console.log(idUser);
            console.log(user.dataValues);
        });

        describe('Create cart controller', () => {

            it('Should create a empty cart', async () => {
                cart = await CartsControllers.createCart({ idUser });
                expect(cart).to.not.be.null;
                expect(cart).to.have.property('idCart');
                expect(cart).to.have.property('idUser');
            });

        });

        describe('Add Cart To User', () => { });

    });

});
