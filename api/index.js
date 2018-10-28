import saves from "./SavesRouter";
import presetsAdminRouter from "./PresetsAdminRouter";
import presetsPublic from "./PresetsPublicRouter";
import { Router } from "express";

const router = new Router();

router.use("/api/presets", presetsPublic);
router.use("/api/saves",  saves);

// router.use("/presets", presetsAdminRouter);

module.exports = router;