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
const { errorHandler, ExpressError } = require("./utils/ExpressError.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User.js");
const session = require('express-session');
const flash = require('connect-flash');
const { cookie } = require("express/lib/response.js");


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

// Session Configuration
const sessionOption = {
    secret: process.env.SESSION_SECRET || "myabroadhubsecret98158",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
        secure: process.env.NODE_ENV === 'production',  // Set to true in production for HTTPS
    }
};

app.use(session(sessionOption));

// Flash Middleware
app.use(flash());
app.use((req, res, next) => {
    res.locals.successMessage = req.flash("success");
    res.locals.errorMessage = req.flash("error");
    next();
});


//Middle ware for Passport Auth
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // LocalStrategy setup
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/api/country", countryRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api", authRoutes);

// Dashboard Route - Show user information
app.get("/api/user-dashboard", (req, res) => {
    //console.log("Session:", req.session);  // Log the session to see if it's initialized
    if (req.isAuthenticated()) {
        const user = req.user;
        console.log('Authenticated user:', user);
        res.status(200).json({
            username: user.username,
            email: user.email
        });
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});


//middleware
app.use((req, res) => {
    res.status(404).send("Opps!! Page Not Found ..");
});


// For unknown Route
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Opps!! Page Not Found"));
});


// Error Handler Middleware
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
