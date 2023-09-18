const { Providers } = require("../src/db");
const { Products } = require("../src/db");

async function setProviderToProducts() {
    try {
        // Obtener todos los productos
        const allProducts = await Products.findAll();

        // Encontrar proveedores
        const fadepa = await Providers.findOne({ where: { name: "FADEPA" } });
        const propintor = await Providers.findOne({ where: { name: "PROPINTOR" } });

        // Crear un array de promesas para las operaciones de setProvider
        const setProviderPromises = allProducts.map(async (product) => {
            switch (product.patent) {
                case "FADEPA":
                    await product.setProvider(fadepa);
                    break;
                case "PROPINTOR":
                    await product.setProvider(propintor);
                    break;
                default:
                    break;
            }
        });

        // Esperar a que todas las promesas se resuelvan
        await Promise.all(setProviderPromises);

        console.log("Productos relacionados con proveedores correctamente");
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

// Llamar a la función principal
setProviderToProducts();
