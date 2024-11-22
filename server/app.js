// require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Country = require("./models/Country.js");
const University = require("./models/University.js");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.route.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const {ExpressError, errorHandler } = require("./utils/ExpressError.js");

const app = express();
app.use(express.json());
app.use(cookieParser()); // allow to pass incoming cookie

dotenv.config();

// MongoDB URL from environment variables
const MongoDb_URL = process.env.MONGODB_URL;
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
    "https://www.api.abroadhub.in"
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin) || origin.startsWith("chrome-extension://")) {
            callback(null, true);
        } else {
            console.log(`Blocked by CORS: ${origin}`);
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


app.use("/api/auth", authRoutes);



app.get("/api/country/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findById(id);
        if (!country) {
            throw new ExpressError("Country not found.", 404);
        }
        res.json(country);
    } catch (err) {
       next(err);
    }
});

// COUNTRY List route
app.get("/api/country", async (req, res) => {
    try {
        const countries = await Country.find({});
        res.json(countries);
    } catch (err) {
        next(err);
    }
});

// University List route
app.get("/api/universities", async (req, res) => {
    try {
        const universities = await University.find({});
        res.json(universities);
    } catch (err) {
        next(err);
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
    } catch (err) {
       next(err);
    }
});

// University Details by ID
app.get("/api/universities/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const university = await University.findById(id);
        if (!university) {
            throw new ExpressError("University not found", 404);
        }
        res.json(university);
    } catch (err) {
        next(err);
    }
});

//middleware
app.use((req, res) => {
    res.status(404).send("Opps!! Page Not Found ..");
});


// Error Handler Middleware
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
