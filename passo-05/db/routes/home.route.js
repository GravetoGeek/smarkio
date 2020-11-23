const express = require("express");
const homeController = require("../controllers/home.controller.js");
const router = express.Router();

// router.get("/",homeController.consulta1);
router.get("/",homeController.consulta2);


module.exports = router;