
const express = require("express");
const router = express.Router();

router.use(require("./usuarios.route.js"));
router.use(require("./intencoes.route.js"));
router.use(require("./mensagens.route.js"));
router.use(require("./status.route.js"));
router.use(require("./home.route.js"));


module.exports = router;