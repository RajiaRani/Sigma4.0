// controllers/universityController.js
const University = require("../models/University.js");
const ExpressError = require("../utils/ExpressError.js");

exports.getAllUniversities = async (req, res, next) => {
    try {
        const universities = await University.find({});
        res.json(universities);
    } catch (err) {
        next(err);
    }
};

exports.getUniversityById = async (req, res, next) => {
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
};

exports.searchUniversities = async (req, res, next) => {
    try {
        const { countryName } = req.query;
        const query = {};
        if (countryName) query.countryName = countryName;
        const universities = await University.find(query);
        res.json(universities);
    } catch (err) {
       next(err);
    }
};
