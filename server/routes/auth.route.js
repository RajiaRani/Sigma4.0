const express = require("express");

const router = express.Router();
const {signup, login, logout, verifyEmail, forgotPassword, resetPassword, checkAuth} = require ("../controllers/auth.controller.js");
const verifyToken = require ("../middleware/verifyToken.js");

// router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup",signup);
router.post("/login", login);
router.post("/logout", logout);


// For Verify the email
// router.post("/verify-email", verifyEmail);

//Forgot-Password
// router.post("/forgot-password", forgotPassword);

//Reset-Passwords
// router.post("/reset-password/:token", resetPassword);

module.exports = router;

