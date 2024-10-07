const express = require("express");
const router = express.Router();
const universityController = require("../controllers/universityController");

// Route to filter universities
router.get("/filtered-universities", universityController.getFilteredUniversities);

module.exports = router;