const mongoose = require("mongoose");


const visaTypeSchema = new mongoose.Schema({
    visaType: { type: String}, // e.g., F-1, M-1
    description: { type: String }, // Description of the visa type
    requiredDocuments: [String], // List of required documents
    eligibility: { type: String }, // Eligibility information
    processSteps: [String], // Steps to apply for the visa
    relatedPrograms: [String], // Related programs, e.g., University, High School
    cost: {
      sevisFee: { type: Number}, // SEVIS fee
      applicationFee: { type: Number } // Application fee
    },
    image:[{type:String},{type:String}],
})
const countrySchema = new mongoose.Schema({
    countryName: {
        type:String,
        required:true
    },
    description:{
        type:String
    },
    visaTypes: [visaTypeSchema] 
});
const Country = mongoose.model("Country", countrySchema);
module.exports = Country;
