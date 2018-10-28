const express = require('express');
const Save = require("../models/TradingTableSave");
const requireAuth = require("../services/Security");

const router = express.Router();

router.get('/', requireAuth, function (req, res) {
    Save.find()
        .then(models => res.json(models))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/', requireAuth, function (req, res) {
    Save.create(req.body)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}))
});

router.delete("/:id", requireAuth, function (req, res) {
    Save.findByIdAndRemove(req.params.id)
        .then(() => res.sendStatus(204))
        .catch(err => res.status(500).json({error: err}))
});


module.exports = router;

