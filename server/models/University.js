const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  examName: { type: String, required: true },
  scoreRange: { type: String }, // Score range (e.g., 0-9 for IELTS, 260-340 for GRE)
  required: { type: Boolean, default: false }, // Is the exam required for admission
  waiver: { type: Boolean, default: false }, // Waiver for the exam (e.g., for certain countries or conditions)
});

const scholarshipSchema = new mongoose.Schema({
  scholarshipName: { type: String, required: true },
  amount: { type: Number, required: true },
  eligibility: { type: String },
});

const intakeSchema = new mongoose.Schema({
  intakeName: { type: String, required: true }, // Intake name (e.g., Summer, Winter, July)
  intakeDate: { type: Date, required: true }, // Intake date
  deadline: { type: Date, required: true }, // Application deadline for the intake
});

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true }, // Course name (e.g., Computer Science)
  degree: { type: String, required: true }, // Degree type (e.g., Bachelors, Masters)
  degreeLevel: { type: String, enum: ["UG", "PG", "PhD"], required: true }, // UG, PG, PhD
  price: { type: String }, // Course price (tuition fee)
  duration: { type: String }, // Duration of the course (e.g., 4 years, 2 years)
  exams: [examSchema], // List of exams required for the course
  scholarships: [scholarshipSchema], // List of scholarships available for the course
  intakes: [intakeSchema], // List of intakes (e.g., Summer, Winter, July)
  credential: { type: String }, // Required credentials for the course (e.g., undergraduate degree)
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
  location: { type: String, required: true },
  ranking: { type: Number },
  acceptanceRate: { type: Number },
  fees: { type: String }, // Adjusted to String since it's given in multiple formats (e.g., ₹14.98 L)
  uniType: { type: String }, // Public or Private
  imageUrl: { type: String },
  description: { type: String },
  UG: [courseSchema], // Array of UG courses
  PG: [courseSchema], // Array of PG courses
  PhD: [courseSchema], // Array of PhD courses

});

const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true },
  universities: [universitySchema],
});

const University = mongoose.model("University", countrySchema);
module.exports = University;
