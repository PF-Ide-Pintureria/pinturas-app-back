const multer = require("multer");

const storage = multer.memoryStorage(); // Almacena los archivos en memoria

const uploadXlsx = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Asegurarse de que solo se permitan archivos con extensión .xlsx
        if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            cb(null, true);
        } else {
            cb(new Error('Formato de archivo no válido. Solo se permiten archivos Excel.'));
        }
    },
});

module.exports = uploadXlsx;
