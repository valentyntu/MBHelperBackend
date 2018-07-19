const express = require('express');
const router = express.Router();

const TradingTableSave = require('../models/TradingTableSave');
const TradingTablePreset = require('../models/TradingTablePreset');

router.get('/saves', function (req, res) {
    TradingTableSave.find()
        .then(saves => res.json(saves))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/saves', function (req, res) {
    TradingTableSave.create(req.body)
        .then(save => res.json(save))
        .catch(err => res.status(500).json({error: err}))
});

router.get('/presets', function (req, res) {
    TradingTablePreset.find()
        .then(presets => res.json(presets))
        .catch(err => res.status(500).json({error: err}))
});

module.exports = router;
