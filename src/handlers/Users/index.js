const fs = require('fs');
const path = require('path');

// Buscamos todos los archivos en el directorio actual que no sean index.js
const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');

// Exportamos todos los archivos encontrados
const Handlers = {};
files.forEach(file => {
    Handlers[file.split('Handler')[0]] =
        require(path.join(__dirname, file));
});

module.exports = Handlers;
