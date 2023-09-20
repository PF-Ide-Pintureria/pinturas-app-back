const { Router } = require('express');
const { ProvidersHandlers } = require("../handlers/");

const router = Router();

//Crear un proveedor
router.post("/", ProvidersHandlers.createProvider);
//Editar un proveedor
router.put("/edit/:id", ProvidersHandlers.editProvider);
// //Obtener todos los proveedores
router.get("/", ProvidersHandlers.getProviders);
// //Eliminar un proveedor
router.delete("/:id", ProvidersHandlers.deleteProvider);
// //Obtener un proveedor
// router.get("/:id", ProvidersHandlers.getProvider);

module.exports = router;
