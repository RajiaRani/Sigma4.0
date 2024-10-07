const mongoose = require("mongoose");
const initData = require("../init/uniData.js");
const University = require("../models/University.js");

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
    await University.deleteMany({});
    await University.insertMany(initData.data);
    console.log("data was initialized");
};
initDataBase();