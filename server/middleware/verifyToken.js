const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
next();
}

module.exports = verifyToken;