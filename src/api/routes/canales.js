var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var canalesContactoModels = require('../models/canalesContactoModels');

router.get('/api/v1/canales', authentication.verifyUser, async (req, res) => {

    try {
        const canales = await actions.get(canalesContactoModels.model);
        res.send(canales);
    } catch (err) {
        res.json({ Error: err.message })
    }
});

router.get('/api/v1/canal/:id', authentication.verifyUser, async (req, res) => {
    try {
        const canal = await actions.get(canalesContactoModels.model, { _id: req.params.id });
        res.send(canal);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }

});

router.post('/api/v1/canal', authentication.verifyUser, async (req, res) => {
    try {
        const canal = await actions.create(canalesContactoModels.model, req.body);
        res.json({ Message: `Record created successfully: ${canal}` })
    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.patch('/api/v1/canal/:id', authentication.verifyUser, async (req, res) => {

    try {
        await actions.update(canalesContactoModels.model, req.params.id, req.body);
        const canalUpdated = await actions.get(canalesContactoModels.model, { _id: req.params.id });
        res.json({ Message: 'Record updated successfully.', canal: `${canalUpdated}` })
    } catch (err) {
        res.json({ Error: err.message })
    }
});

router.put('/api/v1/canal/:id', authentication.verifyUser, async (req, res) => {

    try {
        await actions.update(canalesContactoModels.model, req.params.id, req.body);
        const canalUpdated = await actions.get(canalesContactoModels.model, { _id: req.params.id });
        res.json({ Message: 'Record updated successfully.', Canal: `${canalUpdated}` })

    } catch (err) {
        res.json({ Error: err.message });
    }
});

router.delete('/api/v1/canal/:id', authentication.verifyUser, async (req, res) => {

    try {
        await actions.delete(canalesContactoModels.model, req.params.id, req.body);
        res.json({ Message: 'Record was successfully deleted.' })
    } catch (err) {
        res.json({ Error: err.message })
    }
});

module.exports = router;