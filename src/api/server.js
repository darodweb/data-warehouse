var express = require('express');
// var bodyParser = require('body-parser');
var helmet = require('helmet');
var authentication = require('./authentication');
// var swaggerJsDoc = require('swagger-jsdoc');
// var swaggerUi = require('swagger-ui-express');
// var swaggerDefinition = require('./swaggerDefinitons');

var actions = require('./database/actions/actions');

//models
var usuariosModel = require('./models/usuariosModel');

var cors = require('cors');

// Routes of our database
var usuarios = require('./routes/usuarios');
var regiones = require('./routes/regiones');
var paises = require('./routes/paises');
var ciudades = require('./routes/ciudades');
var companies = require('./routes/companies');
var canales = require('./routes/canales');
var contactos = require('./routes/contactos');


var port = 3001;

// const options = {
//     ...swaggerDefinition,
//     apis: ['./src/routes/*.js']
// }

// const swaggerSpec = swaggerJsDoc(options);

var server = express();

server.use(helmet());
server.use(cors({
    origin: '*'
}));
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(bodyParser());
server.use(express.json());
// server.use('/', apiLimiterLogin);
// server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use('/', usuarios);
server.use('/', regiones);
server.use('/', paises);
server.use('/', ciudades);
server.use('/', companies);
server.use('/', canales);
server.use('/', contactos);


// server.get('/api-docs.json', (req, res) => {
//     res.send(swaggerSpec);
// });

// server.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');

// })

server.post('/login', async (req, res) => {

    try {

        var arg = req.body;
        var email = arg.email;
        var contrasena = arg.contrasena;
        // const usuarios = await actions.get(usuariosModel.model, { email, password })
        const usuario = await usuariosModel.model.find({ email: email, contrasena: contrasena });
        console.log(usuario);
        // const tipo = typeof (usuarios);
        if (usuario.length) {
            var data = { email, contrasena, perfil: usuario.perfil };
            var token = authentication.generateToken(data);
            res.send({
                result: 'Login exitoso',
                role: usuario.perfil,
                token: token
            });
        } else {
            res.send({
                result: 'Username o password incorrecto. Intente nuevamente.'
            });
        }

    } catch (err) {
        res.json({ "Error in login": `${err.message}` })
    }

});

server.listen(port, () => {
    console.log(`SERVER RUNNING IN PORT ${port}`);
});