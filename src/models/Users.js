const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: "Debe ser un email valido",
                },
            },
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            /* validate: {
                isPasswordValid(value) {
                  // Expresión regular para una contraseña segura
                  const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$/;
                  if (!passwordRegex.test(value)) {
                    throw new Error('La contraseña debe contener al menos una letra mayúscula o minúscula, un dígito y un carácter especial (@ $ ! % # ? &), y tener una longitud mínima de 8 caracteres.');
                  }
            },
            validate: {
                //is: /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$/,
                //is: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$/
            } */
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true, //de momento para facilitar pruebas
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        locality: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        province: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isNumeric: true,
            },
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        authZero: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { timestamps: true });
};
