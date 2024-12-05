const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// const { type } = require("express/lib/response");
// const userSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required: true,
//         unique:true
//     },
//     password:{
//         type : String,
//         required:true
//     },
//     name:{
//         type : String,
//         required:true
//     },
//     lastLogin:{
//         type : Date,
//         default: Date.now
//     },
//     isVerified:{
//         type : Boolean,
//         default: false
//     },
//     resetPasswordToken : String,
//     resetPasswordExpiresAt : Date,
//     verificationToken : String,
//     verificationTokenExpiresAt: Date,
// },{timestamps:true});



const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    }
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
module.exports  = User;
