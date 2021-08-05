const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const schema = {
    nombre: String,
    idRegion: ObjectId,
}

module.exports.model = mongoose.model('Paises', schema);
