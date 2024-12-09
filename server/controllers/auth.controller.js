const User = require("../models/User.js");
const express = require("express");
const app = express();
app.use(express.json()); 
const passport = require("passport");

// Signup
const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Create a new user
        const newUser = new User({ email, username});
        // Registers and hashes the password automatically
        const registeredUser = await User.register(newUser, password);
       // console.log(registeredUser);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user', details: error.message });
    }
};



// Login
const login = (req, res, next) => {
    // At this point, the user has already been authenticated by passport.authenticate()
    // So, we directly handle the login process

    req.logIn(req.user, (err) => {
        if (err) {
            return next(err); // Pass the error to the next middleware
        }

        // Send a successful login response with user info
        return res.status(200).json({ 
            message: "Logged in successfully",
            user: {
                username: req.user.username, 
                email: req.user.email,      
            }
        });
    });
};




// Logout
const logout = (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ error: 'Logout failed' });
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

module.exports = { signup, logout, login};










