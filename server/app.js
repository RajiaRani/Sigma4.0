require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Country = require("./models/Country.js");
const University = require("./models/University.js");
const bodyParser = require("body-parser");


const app = express();
app.use(express.json());

// Log the MongoDB URL to verify it's loaded correctly
const MongoDb_URL = process.env.MONGODB_URL;
//console.log("MongoDB URL:", MongoDb_URL);

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


// Middleware
app.use(bodyParser.json());

// Allowed origins for CORS
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://abroadhub.in",
    "http://www.abroadhub.in",
    "http://88.222.212.202:4173",
];

// CORS Configuration
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));

// Test route to verify the server is working
app.get("/", (req, res) => {
    res.send("Backend is working");
});

// COUNTRY List route
app.get("/api/country", async (req, res) => {
    try {
        let countries = await Country.find({});
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



// University List route - Fetch all universities for the initial page load
app.get("/api/universities", async (req, res) => {
    try {
        const universities = await University.find({});
        res.json(universities);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: process.env.NODE_ENV === "production"
                ? "Failed to fetch the data from backend"
                : `Error: ${err.message}`
        });
    }
});


// University Search route - Filters universities by country name
app.get("/api/universities/search", async (req, res) => {
    try {
        const { countryName, universityName } = req.query;
        const query = {};
    
        if (countryName) query.countryName = countryName;
        if (universityName) query.universityName = new RegExp(universityName, 'i'); // Partial match
    
        const universities = await University.find(query);
        res.json(universities);
      } catch (error) {
        console.error("Error fetching universities:", error);
        res.status(500).json({ message: "Error fetching universities" });
      }
});



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
        res.status(500).json({ error: "Opps! Failed to fetch the country data." });
    }
});



//SHOW UNIVERSITY 
app.get("/api/universities/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const university = await University.findById(id);
        if(!university){
            return res.status(404).json({error : "University Not Found"});
        }
        res.json(university);
    } catch(error){
        console.error(error);
        res.status(500).json({error:"Opps!! Failed to fetch the university data."})
    }

});


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
