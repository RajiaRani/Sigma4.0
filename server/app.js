
require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Country = require("./models/Country.js");
const University = require("./models/University.js");
const universityController = require("./controllers/universityController.js");

const app = express();
app.use(express.json());


// Log the MongoDB URL to verify it's loaded correctly
const MongoDb_URL = process.env.MONGODB_URL;
// Connect to MongoDB Atlas
async function main() {
    try {
        await mongoose.connect(MongoDb_URL);
        console.log("Database connected successfully!!");
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
}
main().catch(err => {
    console.error('Database connection failed:', err.message);
});

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173", // Local development URL
    "http://127.0.0.1:5173", // Local development URL
    "http://abroadhub.in" , // Your production frontend URL
    "http://www.abroadhub.in",
];

// CORS Configuration
app.use(cors({
    origin:allowedOrigins, 
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


app.get("/", (req,res) => {
    res.send("backende is working");
})

// COUNTRY List
app.get("/api/country", async (req, res) => {
    try {
        let countries = await Country.find({});
        //console.log(countries);
        res.json(countries);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({
            err: process.env.NODE_ENV === "production"
                ? "Failed to fetch the data"
                : `Error: ${err.message}`
        });
    }
});


//University
app.get("/api/universities", async(req,res) => {
    try{
        const university = await University.find({});
        res.json(university);
    } catch(err){
        console.log(err);
        res.status(500).json({
            err:process.env.NODE_ENV === "production" 
            ? "Failed to fetch the data from backened"
            :`Error : ${err.message}`
        });
    }
});



//Show All Universities List in the full format
// app.get("/api/universities/:id", async(req,res) => {
//   try{
//     let id = req.params;
//     const university = await University.findById(id);
//     if(!university){
//         return res.status(404).json({ error: "University not found." });
//     }
//     res.json(university);
//   }catch(err){
//     console.log(err);
//     res.status(500).json({
//         err:process.env.NODE_ENV === "production"
//         ? "Failed to fetch the data from the universities backened"
//         :`Error : ${err.message}`
//     });
//   }
// });


// SHOW COUNTRY ROUTE
app.get("/api/country/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const country = await Country.findById(id);
        if (!country) {
            return res.status(404).json({ error: "Country not found." });
        }
        res.json(country);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "Failed to fetch the country data." });
    }
});



const port = process.env.PORT ||3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
