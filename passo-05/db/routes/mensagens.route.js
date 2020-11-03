const express = require("express");
const mensagensController = require("../controllers/mensagens.controller.js");
const router = express.Router();

router.get("/mensagens",mensagensController.getAll);
router.get("/mensagem/:id",mensagensController.getById);
router.post("/mensagem",mensagensController.create);
router.put("/mensagem/:id",mensagensController.alterById);
router.delete("/mensagem/:id",mensagensController.deleteById);

module.exports = router;