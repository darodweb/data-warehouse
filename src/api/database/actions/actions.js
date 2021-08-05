const mongoose = require('mongoose');
// const { model } = require('../../models/regionesModel');
mongoose.connect('mongodb+srv://acamica123:acamica123@warehouse.qanab.mongodb.net/Warehouse?retryWrites=true&w=majority', { useUnifiedTopology: true }, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

module.exports.get = async (model, parameters) => {
    return model.find(parameters);
}

module.exports.create = async (model, data) => {
    const newObject = new model(data)
    const result = await newObject.save();
    return result;
}

module.exports.update = async (model, id, data) => {
    return await model.findByIdAndUpdate(id, data)
}

module.exports.delete = async (model, id, data) => {
    return await model.findByIdAndDelete(id, data)
}
