const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const schema = {
    nombre: String,
    telefono: String,
    email: String,
    idCiudad: ObjectId,
    direccion: String
}

module.exports.model = mongoose.model('Companies', schema);
