const fs = require('fs');
const path = require('path');

// Buscamos todas las carpetas en el directorio actual
const folders = fs.readdirSync(__dirname, { withFileTypes: true });
// Cada carpeta es un controlador por entidad
const Handlers = {};
folders.forEach(folder => {
    // El nombre de la carpeta es el nombre del controlador
    // agregando la palabra Controller al final
    if (folder.isDirectory()) {
        Handlers[
            `${folder.name}Handlers`
        ] = require(path.join(__dirname, folder.name));
    }
});

module.exports = Handlers;
