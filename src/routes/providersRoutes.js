const { Router } = require('express');
const { ProvidersHandlers } = require("../handlers/");

const router = Router();

//Crear un proveedor
router.post("/", ProvidersHandlers.createProvider);


module.exports = router;
