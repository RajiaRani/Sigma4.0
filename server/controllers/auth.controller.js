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
    passport.authenticate('local', 
        (err, user, info) => {
            if (err) {
                console.error("Error during authentication:", err); // Log errors during authentication
                return next(err); // Pass the error to the next middleware
            }

            if (!user) {
                console.log("Invalid credentials"); // Log when credentials are invalid
                return res.status(400).json({ message: 'Invalid credentials' }); // Send error response to frontend
            }

            req.logIn(user, (err) => {
                if (err) {
                    console.error("Error during login:", err); // Log errors during login
                    return next(err); // Pass the error to the next middleware
                }

                console.log("User logged in successfully");
                return res.status(200).json({ message: 'Logged in successfully', user }); // Send success response to frontend
            });
        }
    )(req, res, next);
};



// Logout
const logout = (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ error: 'Logout failed' });
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

module.exports = { signup, logout, login};












// =========================================================================================================================================================
//                                                                MAILTRAP
// =========================================================================================================================================================

// const User = require("../models/User.js");
// const crypto = require("crypto");
// const bcryptjs = require("bcryptjs");
// const generateVerificationCode = require("../utils/generateVerificationCode.js");
// const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie.js");
// const {sendVerificationEmail , sendWelcomeEmail , sendPasswordResetEmail, sendResetSuccessEmail}= require("../mailtrap/emails.js");
//SIGNUP
// const signup = async (req, res) => {
//     const { email, password, name } = req.body;
//     try {

//         if (!email || !password || !name) {
//             throw new Error("All fields are required");
//         }

//         const userAlreadyExist = await User.findOne({ email });
//         if (userAlreadyExist) {
//             return res.status(400).json({ success: false, message: "User already exists" });
//         }
//         console.log("user exits", userAlreadyExist);

//         const hashedPassword = await bcryptjs.hash(password, 10);
//         const verificationToken = generateVerificationCode();

//         const user = new User({
//             email,
//             password: hashedPassword,
//             name,
//             verificationToken,
//             verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
//         });

//         await user.save();

//         //jwt 
//         generateTokenAndSetCookie(res,req, user._id);
//         await sendVerificationEmail(user.email, verificationToken);

//         res.status(201).json({
//             success: true,
//             message: " User created successfully",
//             user: {
//                 ...user._doc,
//                 password: undefined,
//             },
//         })

//     }

//     catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//     }
// };


//VERIFYEMAIL
// const verifyEmail = async(req,res) => {
// const {code} = req.body;

// try{
//     const user = await User.findOne({
//         verificationToken: code,
//         verificationTokenExpiresAt:{ $gt: Date.now()}
//     })
//     if(!user){
//         return res.status(400).json({success: false, message:"Invalid or expired verification code"})
//     }
//     user.isVerified = true;
//     user.verificationToken = undefined;
//     user.verificationTokenExpiresAt = undefined;

//     await user.save();

//     await sendWelcomeEmail(user.email, user.name);
//     res.status(200).json({ success: true,
//         message:" Email Verified successfully",
//         user: {
//             ...user._doc,
//             password:undefined,
//         }
//     })
// } catch(error){
//     console.log("error in verifyEmail", error);
//     res.status(500).json({ success: false, message: error.message });
// }
// }



//LOGIN
// const login = async (req, res) => {
//  const { email, password } = req.body;
//  try{
//    const user = await User.findOne({email});
//    if(!user){
//     return res.status(400).json({ success: false, message:"Invalid credentials"});
//    }
//    const isPasswordValid = await bcryptjs.compare(password, user.password);
//    if(!isPasswordValid){
//     return res.status(400).json({ success: false, message:"Invalid credentials"});
//    }

//    generateTokenAndSetCookie(res, user._id);

//    user.lastLogin = new Date();
//    await user.save();

//    res.status(200).json({
//    success: true,
//    message:"Logged in successfully",
//    user: {
//     ...user._doc,
//     password: undefined,
//    },
//    });
//  }
//  catch(error){
//     console.log("error in login ", error);
//     res.status(400).json({ success: false, message: error.message });
//  }
// };


//LOGOUT
// const logout = async (req, res) => {
//     res.clearCookie("token");
//     res.status(200).json({
//         success: true,
//         message: "Logged out successfully"
//     });
// };


// FORGOT-PASSWORD
// const forgotPassword = async (req, res) => {
//     const { email } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ success: false, message: "User not found" });
//         }
        
//         const resetToken = crypto.randomBytes(20).toString("hex"); // Generate token for reset password
//         const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour
        
//         user.resetPasswordToken = resetToken;
//         user.resetPasswordExpiresAt = resetTokenExpiresAt;
        
//         await user.save();
        
//         // Corrected to pass only `email` and `resetURL`
//         await sendPasswordResetEmail(email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
        
//         res.status(200).json({ success: true, message: "Password reset email sent" });
        
//     } catch (error) {
//         console.log("Error for forgot password route", error);
//         res.status(400).json({ success: false, message: error.message });
//     }
// };


//RESET - PASSWORD
// const resetPassword = async(req,res) => {
//     try{
//      const {token} = req.params;
//      const {password} = req.body;

//      const user = await User.findOne({
//         resetPasswordToken: token,
//         resetPasswordExpiresAt: { $gt: Date.now() },
//      });

//      if(!user){
//         return res.status(400).json({ success: false, message: " Invalid or expired reset token"});
//      }
//      const hashedPassword = await bcryptjs.hash(password, 10); //update the hashed  password
//      user.password = hashedPassword;
//      user.resetPasswordToken= undefined;
//      user.resetPasswordExpiresAt = undefined;

//      await user.save();
//      await sendResetSuccessEmail(user.email); //send the reset  success email 
//      res.status(200).json({ success: true, message: "Password reset successfully."})

//     } catch(error){
//         console.log("Error for forgot password route", error);
//         res.status(400).json({ success: false, message: error.message });
//     }
// }

// const checkAuth = async(req,res) => {
//     try {
//         const user = await User.findById(req.userId).select("-password");
//          if(!user) {
//             return res.status(400).json({success: false, message:"User not found"});
//          }

//          res.status(200).json({ success: true, user})
//     } catch (error) {
//         console.log("Error in checkAuth", error);
//         res.status(400).json({ success: false, message: error.message });
//     }
// }

// module.exports = { signup, logout, login, verifyEmail, forgotPassword, resetPassword, checkAuth};
