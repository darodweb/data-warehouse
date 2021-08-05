var jwt = require('jsonwebtoken');

var sign = 'Mi_firma_acamica';

module.exports.generateToken = function (data) {
    return jwt.sign(data, sign);
}

function decode(token) {
    return jwt.verify(token, sign);
}

module.exports.verifyUser = function (req, res, next) {
    var token = req.headers.authorization;
    console.log(token);
    if (token) {
        var decoded = decode(token, sign);
        if (decoded) {
            req.user = decoded;
            next();
        }
    } else {
        return (
            res.json({ Message: 'Username o password incorrectos. Intente nuevamente' })
        );
    }
}
module.exports.verifyUserLogin = function (req, res, next) {
    var token = req.headers.authorization;
    if (token) {
        var decoded = decode(token, sign);
        if (decoded) {
            req.user = decoded;
            next();
        }
    } else {
        return (
            true
        );
    }
}