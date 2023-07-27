const jwt = require("jwt-simple");
const moment = require("moment");
require('dotenv').config();
const {SECRET} = process.env;

const auth = (req, res, next) => {

    if(!req.headers.authorization){

        return res.status(400).json({

            status: "error",
            mensaje: "La petición no tiene la cabecera de autenticación. Por favor inicia sesión."
        })
    }

    //limipar el token por si me vienen comillas
    const token = req.headers.authorization.replace(/['"]+/g, '')

    //Decodificar token
    try {

        let payload = jwt.decode(token, SECRET)
        
        if(payload.exp <= moment.unix()){

            return res.status(401).json({

                status: "error",
                mensaje: "Token expirado",

            })

        }
        
        //Agregar datos del usuario

        req.user = payload; 

    } catch (error) {

        return res.status(404).json({

            status: "error", 
            mensaje: "Token inválido", 
            error: error.message

        })
        
    }

    //Pasar a ejecución de acción
    next()

}

module.exports = auth; 