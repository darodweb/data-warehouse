var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var contactosModel = require('../models/contactosModel');


router.get('/api/v1/contactos', authentication.verifyUser, async (req, res) => {

    try {
        const contactos = await contactosModel.model.aggregate([
            {
                "$lookup": {
                    "from": "canales",
                    "localField": "idCanalContacto",
                    "foreignField": "_id",
                    "as": "canal_contacto"
                }
            }
        ]).exec()
        res.json(contactos);
    } catch (err) {
        res.json({ Error: err.message })
    }
});

router.get('/api/v1/contacto/:id', authentication.verifyUser, async (req, res) => {
    try {
        const contacto = await actions.get(contactosModel.model, { _id: req.params.id });
        if (contacto.length <= 0) {
            res.json({ Message: "contacto not found" })
        } else {
            res.json({ 'Result': contacto });
        }

    } catch (err) {
        res.json({ Error: err.message })
    }
});


router.post('/api/v1/contacto', authentication.verifyUser, async (req, res) => {

    try {

        const newContactEmail = req.body.email;
        const existingContactEmail = await contactosModel.model.find({ email: { $eq: newContactEmail } });
        if (existingContactEmail.length === 0) {
            const contacto = await actions.create(contactosModel.model, req.body);
            res.json({ Message: `Record created successfully!`, contacto: `${contacto}` });

        } else if (newContactEmail === existingContactEmail[0].email) {
            res.json({ Message: 'Please try with a different email.' })
        }

    } catch (err) {
        res.json({ "Error creating new record": err.message })
    }

});

router.patch('/api/v1/contacto/:id', authentication.verifyUser, async (req, res) => {
    try {
        await actions.update(contactosModel.model, req.params.id, req.body);
        const contactoUpdated = await actions.get(contactosModel.model, { _id: req.params.id });
        res.json({ Message: "Record updated successfully", Details: contactoUpdated });
    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.put('/api/v1/contacto/:id', authentication.verifyUser, async (req, res) => {
    try {
        await actions.update(contactosModel.model, req.params.id, req.body);
        const contactoUpdated = await actions.get(contactosModel.model, { _id: req.params.id });
        res.json(contactoUpdated);
    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.delete('/api/v1/contacto/:id', authentication.verifyUser, async (req, res) => {
    await actions.delete(contactosModel.model, req.params.id, req.body);
    res.json({ Message: 'Record deleted successfully.' });
});

module.exports = router;
