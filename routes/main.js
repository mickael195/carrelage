const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.getHomePage);
router.get("/carrelage", mainController.getCarrelagePage);
router.get("/salle-de-bains", mainController.getSalleDeBainPage);
router.get("/terre-cuite", mainController.getTerreCuite);
router.get("/terrasse", mainController.getTerrassePage);
router.get("/realisation", mainController.getRealisationPage);

module.exports = router;
