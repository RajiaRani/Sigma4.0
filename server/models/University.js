const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  examName: { type: String, required: true },
  scoreRange: { type: String }, 
  required: { type: Boolean, default: false }, 
  waiver: { type: Boolean, default: false }, 
});

const scholarshipSchema = new mongoose.Schema({
  scholarshipName: { type: String, required: true },
  amount: { type: Number, required: true },
  eligibility: { type: String },
});

const intakeSchema = new mongoose.Schema({
  intakeName: { type: String, required: true },
  intakeDate: { type: Date, required: true }, 
  deadline: { type: Date, required: true }, 
});

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true }, 
  degree: { type: String, required: true }, 
  degreeLevel: { type: String, enum: ["UG", "PG", "PhD"], required: true }, 
  price: { type: String }, 
  duration: { type: String }, 
  exams: [examSchema], 
  scholarships: [scholarshipSchema],
  intakes: [intakeSchema], 
  credential: { type: String }, 
});

// Pre-save hook to automatically update intake and deadline to the current or next year
courseSchema.pre("save", function (next) {
  const currentYear = new Date().getFullYear();

  this.intakes.forEach(intake => {
    const intakeDate = new Date(intake.intakeDate);
    intakeDate.setFullYear(currentYear + (intakeDate < new Date() ? 1 : 0)); // Set to next year if intake has passed
    intake.intakeDate = intakeDate;

    const deadlineDate = new Date(intake.deadline);
    deadlineDate.setFullYear(currentYear + (deadlineDate < new Date() ? 1 : 0)); // Set to next year if deadline has passed
    intake.deadline = deadlineDate;
  });

  if (this.degreeLevel === "PG" && !this.degree.includes("Masters")) {
    return next(new Error("PG courses must include 'Masters' in the degree field"));
  }
  if (this.degreeLevel === "UG" && !this.degree.includes("Bachelors")) {
    return next(new Error("UG courses must include 'Bachelors' in the degree field"));
  }
  if (this.degreeLevel === "PhD" && !this.degree.includes("PhD")) {
    return next(new Error("PhD courses must include 'PhD' in the degree field"));
  }

  next();
});

const universitySchema = new mongoose.Schema({
  universityName: { type: String, required: true },
  countryName: {type: String},
  location: { type: String, required: true },
  ranking: { type: Number },
  acceptanceRate: { type: Number },
  fees: { type: String }, 
  uniType: { type: String },
  imageUrl: { type: String },
  description: { type: String },
  UG: [courseSchema], 
  PG: [courseSchema], 
  PhD: [courseSchema], 

});

// const countrySchema = new mongoose.Schema({
//   countryName: { type: String, required: true },
//   universities: [universitySchema],
// });

const University = mongoose.model("University", universitySchema);
module.exports = University;
