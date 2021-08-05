// // const sequalize = require('sequelize');
// const database = new sequalize('mysql://root:password@localhost:3306/delilahresto');

// module.exports.get = async (sentence, parameters) => {
//     return await database.query(sentence,
//         { replacements: parameters, type: database.QueryTypes.SELECT });
// }

// module.exports.create = async (sentence, parameters) => {
//     return await database.query(sentence,
//         { replacements: parameters, type: database.QueryTypes.INSERT });
// }

// module.exports.update = async (sentence, parameters) => {
//     return await database.query(sentence,
//         { replacements: parameters, type: database.QueryTypes.UPDATE });
// }

// module.exports.delete = async (sentence, parameters) => {
//     return await database.query(sentence,
//         { replacements: parameters, type: database.QueryTypes.DELETE });
// }
