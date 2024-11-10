const User = require("../models/User.js");
const bcryptjs = require("bcryptjs");
const generateVerificationCode = require("../utils/generateVerificationCode.js");
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie.js");
const {sendVerificationEmail , sendWelcomeEmail }= require("../mailtrap/emails.js");


//SIGNUP
const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {

        if (!email || !password || !name) {
            throw new Error("All fields are required");
        }

        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        console.log("user exits", userAlreadyExist);

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = generateVerificationCode();

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        });

        await user.save();

        //jwt 
        generateTokenAndSetCookie(res,req, user._id);
        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
            success: true,
            message: " User created successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        })

    }

    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//VERIFYEMAIL
const verifyEmail = async(req,res) => {
const {code} = req.body;

try{
    const user = await User.findOne({
        verificationToken: code,
        verificationTokenExpiresAt:{ $gt: Date.now()}
    })
    if(!user){
        return res.status(400).json({success: false, message:"Invalid or expired verification code"})
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();
    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({ success: true,
        message:" Email Verified successfully",
        user: {
            ...user._doc,
            password:undefined,
        }
    })
} catch(error){
    res.status(400).json({ success: false, message: error.message });
}
}



//LOGIN
const login = async (req, res) => {
 const { email, password } = req.body;
 try{
   const user = await User.findOne({email});
   if(!user){
    return res.status(400).json({
        success: false,
        message:"Invalid credentials"
    });
   }
   const isPasswordValid = await bcryptjs.compare(password, user.password);
   if(!isPasswordValid){
    return res.status(400).json({
        success: false,
        message:"Invalid credentials"
    });
   }

   generateTokenAndSetCookie(res, user._id);

   user.lastLogin = new Date();
   await user.save();

   res.status(200).json({
    success: true,
   message:"Logged in successfully",
   user:{
    ...user._doc,
    password: undefined,
   },
   })
 }
 catch(error){
    console.log("error in login ", error);
    res.status(400).json({ success: false, message: error.message });
 }
};


//LOGOUT
const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};


module.exports = { signup, logout, login, verifyEmail };