const User = require("../models/User.js");
const bcryptjs = require("bcryptjs");
const generateVerificationCode = require("../utils/generateVerificationCode.js");
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie.js");
const sendVerificationEmail = require("../mailtrap/emails.js");

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

}
}



const login = async (req, res) => {
    res.send("Login page!!")
};
const logout = async (req, res) => {
    res.send("Logout page!!")
};


module.exports = { signup, logout, login, verifyEmail };
