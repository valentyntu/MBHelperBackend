const express = require('express');

function RESTfulRouter(controller) {
    const router = express.Router();

    router.get('/', function (req, res) {
        controller.find(req.query ? req.query : null)
            .then(models => res.json(models))
            .catch(err => res.status(500).json({error: err}))
    });

    router.post('/', function (req, res) {
        controller.create(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error: err}))
    });

    router.get("/:id", function (req, res) {
        controller.findById(req.params.id)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error: err}))
    });

    router.delete("/:id", function (req, res) {
        controller.removeById(req.params.id)
            .then(m => res.status(204).json('OK'))
            .catch(err => res.status(500).json({error: err}))
    });

    router.patch("/:id", async function (req, res) {
        controller.updateById(req.params.id, req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error: err}));
    });

    return router;
}

module.exports = RESTfulRouter;

