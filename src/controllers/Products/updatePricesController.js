const xlsx = require('xlsx');
const { Providers } = require('../../db.js');
const calculatePrice = require("../../utils/calculatePrice.js");
const IVA = 21;

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

    let updatedCount = 0;
    //armo un conjunto de promesas para luego ejecutarlas en paralelo y optimizar rendimiento
    const updatePromises = productsFromExcel.map(async (productExcel) => {
        const code = productExcel.codigo;
        const listPrice = productExcel.precio;

        if (productsIndex[code]) {
            const productDB = productsIndex[code];
            // Calcular el nuevo precio aquí
            const finalPrice = calculatePrice(listPrice, provider.discount, IVA, provider.markup);
            // Actualizar el precio en la DB si es diferente
            if (productDB.price !== finalPrice) {
                await productDB.update({ price: finalPrice });
                updatedCount++; // Incrementar el contador de actualizaciones exitosas
            }
        }
    });

    // Ejecutar todas las promesas en paralelo
    await Promise.all(updatePromises);

    return `Se han actualizado ${updatedCount} productos`;

};

module.exports = updatePricesController;
