const express = require("express");
const router = express.Router();
const {signup, login, logout} = require ("../controllers/auth.controller.js");

router.post("/signup", signup); 
router.post("/login", login);
router.post("/logout", logout);


module.exports = router;













// const {signup, login, logout, verifyEmail, forgotPassword, resetPassword, checkAuth} = require ("../controllers/auth.controller.js");
// const verifyToken = require ("../middleware/verifyToken.js");

// For Verify the email
// router.post("/verify-email", verifyEmail);

// router.get("/signup",signup);
// router.post("/login", login);
// router.post("/logout", logout);
// router.get("/check-auth", verifyToken, checkAuth);

//Forgot-Password
// router.post("/forgot-password", forgotPassword);

//Reset-Passwords
// router.post("/reset-password/:token", resetPassword);



