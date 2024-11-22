const express = require("express");
const { getAllCountries, getCountryById } = require("../controllers/country.controller.js");

const router = express.Router();

router.get("/", getAllCountries);
router.get("/:id", getCountryById);

module.exports = router;