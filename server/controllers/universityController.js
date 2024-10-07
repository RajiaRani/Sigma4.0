const University = require("../models/University.js");

exports.getFilteredUniversities = async (req, res) => {
  const { specialization, examsAccepted, fees } = req.query;
  const filter = {};

  // Filter by specialization (course name)
  if (specialization) {
    filter.$or = [
      { "universities.UG.courseName": { $regex: specialization, $options: "i" } },
      { "universities.PG.courseName": { $regex: specialization, $options: "i" } },
      { "universities.PhD.courseName": { $regex: specialization, $options: "i" } }
    ];
  }

  // Filter by exams accepted
  if (examsAccepted) {
    filter.$or = [
      { "universities.UG.exams.examName": { $in: examsAccepted.split(",") } },
      { "universities.PG.exams.examName": { $in: examsAccepted.split(",") } },
      { "universities.PhD.exams.examName": { $in: examsAccepted.split(",") } }
    ];
  }

  // Filter by fees (convert to numeric and apply range filters)
  if (fees) {
    const maxFee = Number(fees); // Convert fees to a number
    filter.$or = [
      { "universities.UG.price": { $lte: maxFee } },
      { "universities.PG.price": { $lte: maxFee } },
      { "universities.PhD.price": { $lte: maxFee } }
    ];
  }

  try {
    const filteredUniversities = await University.find(filter).exec();
    res.json(filteredUniversities);
  } catch (error) {
    res.status(500).json({ error: "Error filtering universities", message: error.message });
  }
};
