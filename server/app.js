// require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.route.js");
const countryRoutes = require("./routes/country.route.js");
const universityRoutes = require("./routes/universities.route.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { errorHandler , ExpressError}= require("./utils/ExpressError.js");


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


app.use("/api/country", countryRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api/auth", authRoutes);


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
