const mongoose = require('mongoose');

const TWEETSschema = mongoose.Schema({
    
    text: {
        type: String,
        validate: {
            validator: valor => (valor !== '' && valor !== ' ' || valor.length < 280),
            message: "El tweet no es valido"
        },
        required: [true, "El texto del tweet es necesario"]
    },

    owner: {
        type: String,
        required: [true, "Se requiere un propietario"]
    },

    createdAt: {
        type: Number,
        required: [true, "Se requiere fecha"]
    }
});

const tweets = mongoose.model('tweet', TWEETSschema);
module.exports = tweets;
