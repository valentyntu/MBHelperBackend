const express = require('express');
const Preset = require("../models/TradingTablePreset");

const router = express.Router();

router.get("/", function (req, res) {
    Preset.find()
        .then(presets => res.json(presets))
        .catch(err => res.status(500).json({error: err}))
});

module.exports = router;