const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


const schema = {
    ciudad: String,
    idPais: ObjectId
}

module.exports.model = mongoose.model('Ciudades', schema);
