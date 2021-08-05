const mongoose = require('mongoose');

const schema = {
    nombre: String,
    apellido: String,
    email: String,
    perfil: String,
    contrasena: String
}

module.exports.model = mongoose.model('Usuarios', schema);
