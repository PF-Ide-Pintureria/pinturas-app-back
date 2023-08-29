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
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            },
            defaultValue: "https://res.cloudinary.com/dbiibtzo5/image/upload/v1690830660/product-1690830659840-Archivo_002.png.png"
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
        },
        idUser: {
            type: DataTypes.UUID,
            allowNull: true,
            defaultValue: DataTypes.UUIDV4,
        },
    }, { timestamps: true }
    );
};
