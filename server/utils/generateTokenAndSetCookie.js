const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (res,req,userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn : "7d"
    })
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", 
        sameSite: "strict",
        maxAge: 7 * 60 * 60 * 1000,

    });
    return token;
}
module.exports = generateTokenAndSetCookie; 