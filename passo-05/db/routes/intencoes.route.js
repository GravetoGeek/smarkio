const express = require("express");
const intencoesController = require("../controllers/intencoes.controller.js");
const router = express.Router();

router.get("/intencoes",intencoesController.getAll);
router.get("/intencao/:id",intencoesController.getById);
router.post("/intencao",intencoesController.create);
router.put("/intencao/:id",intencoesController.alterById);
router.delete("/intencao/:id",intencoesController.deleteById);

module.exports = router;