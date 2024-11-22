const express = require("express");
const { getAllUniversities, getUniversityById, searchUniversities } = require("../controllers/universities.controller.js");

const router = express.Router();

router.get("/", getAllUniversities);
router.get("/search", searchUniversities);
router.get("/:id", getUniversityById);

module.exports = router;
