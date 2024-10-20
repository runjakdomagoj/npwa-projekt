const express = require("express");
const router = express.Router();
const {
   getManufacturers,
   createManufacturer,
} = require("../Controllers/manufacturerController");

router.get("/", getManufacturers);
router.post("/", createManufacturer);

module.exports = router;
