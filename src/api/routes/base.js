var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');

router.get('/somethings', authentication.verifyUser, async (req, res) => {
    // code here
});

router.post('/something', authentication.verifyUser, async (req, res) => {
    // code here
});

router.put('/something', authentication.verifyUser, async (req, res) => {
    // code here
});

router.patch('/something', authentication.verifyUser, async (req, res) => {
    // code here
});

router.delete('/something', authentication.verifyUser, async (req, res) => {
    // code here
});

module.exports = router;