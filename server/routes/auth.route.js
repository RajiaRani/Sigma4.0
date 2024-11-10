const express = require("express");

const router = express.Router();
const {signup, login, logout, verifyEmail} = require ("../controllers/auth.controller.js");


router.post("/signup",signup);
router.post("/login", login);
router.post("/logout", logout);


// For Verify the email
router.post("/verify-email", verifyEmail);
module.exports = router;