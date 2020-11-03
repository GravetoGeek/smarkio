const express = require("express");
const usuariosController = require("../controllers/usuarios.controller.js");
const router = express.Router();

router.get("/usuarios",usuariosController.getAll);
router.get("/usuario/:id",usuariosController.getById);
router.post("/usuario",usuariosController.create);
router.put("/usuario/:id",usuariosController.alterById);
router.delete("/usuario/:id",usuariosController.deleteById);

module.exports = router;