var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var ciudadesModel = require('../models/ciudadesModel');
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

router.get('/api/v1/ciudades', /*authentication.verifyUser,*/ async (req, res) => {

    try {
        const ciudades = await ciudadesModel.model.aggregate([
            {
                "$lookup": {
                    "from": "paises",
                    "localField": "idPais",
                    "foreignField": "_id",
                    "as": "pais"
                }
            }
        ]).exec()
        res.send(ciudades);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }
});


router.get('/api/v1/ciudades/:idPais', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const ciudades = await ciudadesModel.model.aggregate([
            {
                "$match": { idPais: ObjectId(req.params.idPais) },
            },
            {
                "$lookup": {
                    "from": "paises",
                    "localField": "idPais",
                    "foreignField": "_id",
                    "as": "pais"
                }
            }
        ]).exec()
        const resultado = ciudades.length;
        res.send(ciudades);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }

});


router.get('/api/v1/ciudad/:idCiudad', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const ciudad = await actions.get(ciudadesModel.model, { _id: req.params.idCiudad });
        res.send(ciudad);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }

});

router.post('/api/v1/ciudad', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const ciudad = await actions.create(
            ciudadesModel.model,
            req.body);
        res.json({ Message: `City created successfully: ${ciudad}` })
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }

});

router.patch('/api/v1/ciudad/:id', authentication.verifyUser, async (req, res) => {

    try {
        await actions.update(ciudadesModel.model, req.params.id, req.body);
        const ciudadUpdated = await actions.get(ciudadesModel.model, { _id: req.params.id });
        res.json({ Message: 'City updated successfully.', Ciudad: `${ciudadUpdated}` })
    } catch (err) {
        res.json({ Error: err.message })
    }
});

router.put('/api/v1/ciudad/:id', authentication.verifyUser, async (req, res) => {

    try {
        await actions.update(ciudadesModel.model, req.params.id, req.body);
        const ciudadUpdated = await actions.get(ciudadesModel.model, { _id: req.params.id });
        res.json({ Message: 'City updated successfully.', City: `${ciudadUpdated}` })

    } catch (err) {
        res.json({ Error: err.message });
    }
});

router.delete('/api/v1/ciudad/:id', authentication.verifyUser, async (req, res) => {

    try {
        await actions.delete(ciudadesModel.model, req.params.id, req.body);
        res.json({ Message: 'Record was successfully deleted.' })
    } catch (err) {
        res.json({ Error: err.message })
    }
});

module.exports = router;