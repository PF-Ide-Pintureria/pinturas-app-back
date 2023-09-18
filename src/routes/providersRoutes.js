const { Router } = require('express');
const { ProvidersHandlers } = require("../handlers/");

const router = Router();

//Crear un proveedor
router.post("/", ProvidersHandlers.createProvider);
//Editar un proveedor
router.put("/edit/:id", ProvidersHandlers.editProvider);
// //Eliminar un proveedor
// router.delete("/:id", ProvidersHandlers.deleteProvider);
// //Obtener un proveedor
// router.get("/:id", ProvidersHandlers.getProvider);
// //Obtener todos los proveedores
// router.get("/", ProvidersHandlers.getProviders);

module.exports = router;
