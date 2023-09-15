const xlsx = require('xlsx');
const { Products } = require('../../db.js');

const updatePricesController = async (excelFile) => {
    const productsDb = await Products.findAll();
    const productsIndex = {};

    productsDb.forEach(product => {
        productsIndex[product.code] = product;
    });
    // Leer y procesar el archivo Excel
    const workbook = xlsx.read(excelFile.buffer); // Leer el archivo en memoria

    // Obtener la primera hoja del libro
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Convertir los datos en formato JSON
    const productsFromExcel = xlsx.utils.sheet_to_json(worksheet);

    let updates = 0;

    for await (const productExcel of productsFromExcel) {
        const code = productExcel.codigo;
        const newPrice = productExcel.precio;

        if (productsIndex[code]) {
            // Encontrar el producto en la DB por código
            const productDB = productsIndex[code];

            // Actualizar el precio en la DB si es diferente
            if (productDB.price !== newPrice) {
                await productDB.update({ price: newPrice });
                updates = updates + 1;
            }
        }
    };

    return `Se han actualizado ${updates} productos`;

};

module.exports = updatePricesController;
