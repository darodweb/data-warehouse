const mongoose = require('mongoose');

const schema = {
    canal: String,
}

module.exports.model = mongoose.model('Canales', schema);
