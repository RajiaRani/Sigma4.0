const express = require("express");
const router = express.Router();
const passport = require("passport");
const {signup, login, logout} = require ("../controllers/auth.controller.js");

router.post("/signup", signup); 

router.post("/login", passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }),login);

router.post("/logout", logout);


module.exports = router;




