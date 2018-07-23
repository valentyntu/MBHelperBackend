const express = require("express");
const router = express.Router();

const restfulRouter = require("./RESTfulRouter");

const controllers = require("../controllers");

for (let path in controllers) {
    router.use(`/${path}`, restfulRouter(controllers[path]));
}

module.exports = router;