const mongoose = require('mongoose');

const USERSschema = mongoose.Schema({
    
    username: {
        type: String,
        validate : {
            validator: valor => valor.length > 4 && valor.length < 20,
            message: "El nombre de usuario debe de tener una longitud entre 4 y 20" 
        },
        required: [true, "Se requiere nombre de usuario"]
    },

    name: {
        type: String,
        validate: {
            validator: valor => valor.length > 3,
            message: "El nombre debe tener una longitud minima de 3"
        },
        required: [true, "Se requiere nombre"]
    },

    email: {
        type: String,
        validate: {
            validator: valor => valor.indexOf('@') !== -1,
            message: "Email no valido"
        },
        required: [true, "Se requiere email"]
    }
});

const users = mongoose.model('user', USERSschema);
module.exports = users;