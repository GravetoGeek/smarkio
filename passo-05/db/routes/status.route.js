const express = require("express");
const statusController = require("../controllers/status.controller.js");
const router = express.Router();

router.get("/status",statusController.getAll);
router.get("/status/:id",statusController.getById);
router.post("/status",statusController.create);
router.put("/status/:id",statusController.alterById);
router.delete("/status/:id",statusController.deleteById);

module.exports = router;