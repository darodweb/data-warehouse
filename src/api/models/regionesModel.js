const mongoose = require('mongoose');

const schema = {
    nombre: String,
}

module.exports.model = mongoose.model('Regiones', schema);
