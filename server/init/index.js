const mongoose = require("mongoose");
const initData = require("../init/countryData.js");
const Country = require("../models/Country.js");


const mongodbURI="mongodb://127.0.0.1/AbroadHubDatabase";

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