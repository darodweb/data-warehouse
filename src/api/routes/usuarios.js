var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var usuariosModel = require('../models/usuariosModel');


router.get('/api/v1/usuarios', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const usuarios = await actions.get(usuariosModel.model);
        res.send(usuarios);
    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.get('/api/v1/usuario/:id', authentication.verifyUser, async (req, res) => {
    try {
        const usuario = await actions.get(usuariosModel.model, { email: req.params.id });
        if (usuario.length <= 0) {
            res.json({ Message: "Usuario not found" })
        } else {
            res.json({ 'Result': usuario });
        }

    } catch (err) {
        res.json({ Error: err.message })
    }
});


router.post('/api/v1/usuario', async (req, res) => {

    try {

        const newUserEmail = req.body.email;
        console.log(newUserEmail);
        const existingUserEmail = await usuariosModel.model.find({ email: { $eq: newUserEmail } });
        console.log(existingUserEmail);
        if (existingUserEmail.length === 0) {
            const admin = await actions.create(
                usuariosModel.model,
                req.body);
            res.json({ Message: `Admin created successfully!`, Admin: `${admin}` });

        } else if (newUserEmail === existingUserEmail[0].email) {
            res.json({ Message: 'Please try with a different email.' })
        }

    } catch (err) {
        res.json({ "Error creating new admin": err.message })
    }

});

router.patch('/api/v1/usuario/:id', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        await actions.update(usuariosModel.model, req.params.id, req.body);
        const usuarioUpdated = await actions.get(usuariosModel.model, { _id: req.params.id });
        res.json({ usuarioUpdated });
        console.log(usuarioUpdated);
    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.put('/api/v1/usuario/:id', authentication.verifyUser, async (req, res) => {
    try {
        await actions.update(usuariosModel.model, req.params.id, req.body);
        const usuarioUpdated = await actions.get(usuariosModel.model, { _id: req.params.id });
        res.json({ usuarioUpdated });
        console.log(usuarioUpdated);
    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.delete('/api/v1/usuario/:id', authentication.verifyUser, async (req, res) => {
    await actions.delete(usuariosModel.model, req.params.id);
    res.json({ Message: 'Usuario deleted successfully.' });
});

module.exports = router;
