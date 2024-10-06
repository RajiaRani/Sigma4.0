const mongoose = require("mongoose");
const initData = require("../init/countryData.js");
const Country = require("../models/Country.js");

const mongodbURI = "mongodb+srv://abroadhubconsult:3wtVLGuwcsTjXpG1@abroadhub.6v8ed.mongodb.net/AbroadHubDatabase?retryWrites=true&w=majority";

main().then(() => {
    console.log("database connected successfully!!");
}) .catch((err) => {
    console.log(err);
});

async function main(){
   await mongoose.connect(mongodbURI);
};

const initDataBase = async() => {
    await Country.deleteMany({});
    await Country.insertMany(initData.data);
    console.log("data was initialized");
};
initDataBase();