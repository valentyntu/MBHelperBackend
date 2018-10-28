const express = require('express');
const Preset = require("../models/TradingTablePreset");


const router = express.Router();

router.post("/", function (req, res) {
    Preset.create(req.body)
        .then(p => res.json(p))
        .catch(err => res.status(500).json({error: err}))
});

router.delete("/:id", function (req, res) {
    Preset.removeById(req.params.id)
        .then(() => res.sendStatus(204))
        .catch(err => res.status(500).json({error: err}))
});

router.get("/:id", function (req, res) {
    Preset.findById(req.params.id)
        .then(p => res.json(p))
        .catch(err => res.status(500).json({error: err}))
});

router.patch("/:id", async function (req, res) {
    Preset.updateById(req.params.id, req.body)
        .then(p => res.json(p))
        .catch(err => res.status(500).json({error: err}));
});

module.exports = router;