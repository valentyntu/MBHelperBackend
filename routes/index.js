const express = require("express");
const router = express.Router();


const savesRouter = require("./SavesRouter");
const presetsAdminRouter = require("./PresetsAdminRouter");
const presetsPublicRouter = require("./PresetsPublicRouter");

router.use("/presets", presetsPublicRouter);
router.use("/saves",  savesRouter);

// router.use("/presets", presetsAdminRouter);

module.exports = router;