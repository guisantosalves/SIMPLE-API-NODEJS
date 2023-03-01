const express = require("express");
const router = express.Router();
const controllerReceitar = require("../controllers/receitasControllers");

router.post("/receitas", controllerReceitar.insertReceitas);
router.get("/receitas", controllerReceitar.getReceitas);
router.get("/receitas/:id", controllerReceitar.getReceitasById);

module.exports = router;
