const Country = require("../models/Country.js");
const ExpressError = require("../utils/ExpressError.js");

// COUNTRY List route
exports.getAllCountries = async (req, res, next) =>{
    try {
        const countries = await Country.find({});
        res.json(countries);
    } catch (err) {
        next(err);
    }
};

exports.getCountryById = async (req, res, next)  => {
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
};

