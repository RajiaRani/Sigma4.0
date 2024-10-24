const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const visaTypeSchema = new mongoose.Schema({
    visaType: { type: String }, // e.g., F-1, M-1
    description: { type: String }, // Description of the visa type
    requiredDocuments: [String], // List of required documents
    eligibility: { type: String }, // Eligibility information
    processSteps: [String], // Steps to apply for the visa
    relatedPrograms: [String], // Related programs, e.g., University, High School
    cost: {
      sevisFee: { type: Number }, // SEVIS fee
      applicationFee: { type: Number } // Application fee
    },
    images: [String], // List of image URLs for the visa type
});

const sectionSchema = new mongoose.Schema({
    heading: { type: String }, // Optional heading for each section
    content: { type: String }, // The content of the section (text)
    images: [String] // Array of image URLs for the section, can be up to 4 images
});

const universityTypeSchema = new mongoose.Schema({
    university:{type:String},
    universityType:[String],
});

const studyRequirementsSchema = new mongoose.Schema({
  study:{
    type:String
  },
  requirements:{
    MandatoryRequirements:[String],
    PopularUniversities:[String],
    OptionalRequirements:[String],  
  },
});

const countrySchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true
    },
    intro:{
        type: String,
    },
    countryImage:{
        type: String,
    },
    description: [sectionSchema], // Flexible array of sections with optional headings, text, and images
    visaTypes: [visaTypeSchema] ,
    universityTypes:[universityTypeSchema],
    studystudyRequirements:[studyRequirementsSchema],
});

const Country = mongoose.model("Country", countrySchema);
module.exports = Country;

