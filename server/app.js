require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Country = require("./models/Country.js");
const University = require("./models/University.js");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

// MongoDB URL from environment variables
const MongoDb_URL = process.env.MONGODB_URL;

// Connect to MongoDB Atlas
async function main() {
    try {
        await mongoose.connect(MongoDb_URL);
        console.log("Database connected successfully!!");
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
}
main().catch(err => {
    console.error("Database connection failed:", err.message);
});

// Middleware to parse JSON
app.use(bodyParser.json());

// Allowed origins for CORS
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://abroadhub.in",
    "http://www.abroadhub.in",
    "http://88.222.212.202:4173",
      "https://abroadhub.in",        
    "https://www.abroadhub.in",       
    "https://api.abroadhub.in",       
    "https://www.api.abroadhub.in",
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
    credentials: true,
};

app.use(cors(corsOptions));


// Test route to verify the server is working
app.get("/", (req, res) => {
    res.send("Backend is working");
});


// Apply the middleware only to /api/country/:id route
app.get("/api/country/:id",  async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findById(id);
        if (!country) {
            return res.status(404).json({ error: "Country not found." });
        }
        res.json(country);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Oops! Failed to fetch the country data." });
    }
});

// COUNTRY List route
app.get("/api/country", async (req, res) => {
    try {
        const countries = await Country.find({});
        res.json(countries);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            err: process.env.NODE_ENV === "production"
                ? "Failed to fetch the data"
                : `Error: ${err.message}`
        });
    }
});

// University List route
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
        const { countryName } = req.query;
        const query = {};

        if (countryName) query.countryName = countryName;

        const universities = await University.find(query);
        res.json(universities);
    } catch (error) {
        console.error("Error fetching universities:", error);
        res.status(500).json({ message: "Error fetching universities" });
    }
});

// University Details by ID
app.get("/api/universities/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const university = await University.findById(id);
        if (!university) {
            return res.status(404).json({ error: "University not found" });
        }
        res.json(university);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Oops! Failed to fetch the university data." });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
