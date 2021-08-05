const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const schema = {
    nombre: String,
    apellido: String,
    email: String,
    idCompany: ObjectId,
    idCiudad: ObjectId,
    direccion: String,
    contacto: {
        idCanalContacto: ObjectId,
        detalle: String
    }
}

module.exports.model = mongoose.model('Contactos', schema);
