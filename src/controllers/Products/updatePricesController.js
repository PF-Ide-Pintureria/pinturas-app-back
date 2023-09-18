const xlsx = require('xlsx');
const { Providers } = require('../../db.js');
//REVISAR LUEGO
const IVA = 21;
const MARKUP = 50;

// function calcularPrecioFinal(precioBase, descuentoPorcentaje, IVA, MARKUP) {
//     const precioFinal = precioBase * (1 - descuentoPorcentaje / 100) * (1 + IVA / 100) * (1 + MARKUP / 100);
//     return precioFinal;
// }

const updatePricesController = async (excelFile, { providerName }) => {

    const provider = await Providers.findOne({ where: { name: providerName } });
    const productsByProvider = await provider.getProducts();
    const productsIndex = {};

    productsByProvider.forEach(product => {
        productsIndex[product.code] = product;
    });
    // Leer y procesar el archivo Excel
    const workbook = xlsx.read(excelFile.buffer); // Leer el archivo en memoria

    // Obtener la primera hoja del libro Excel
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
                await productDB.update({ price: newPrice * (1 - provider.discount / 100) * (1 + IVA / 100) * (1 + MARKUP / 100) });
                updates = updates + 1;
            }
        }
    };

    return `Se han actualizado ${updates} productos`;

};

module.exports = updatePricesController;
