// UniversityList.jsx
import { useState, useEffect } from "react";
import axios from "axios";

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);
  const [filters, setFilters] = useState({
    specialization: '',
    examsAccepted: '',
    fees: ''
  });

  useEffect(() => {
    fetchUniversities();
  }, []);

  // Fetch universities without any filters initially
  const fetchUniversities = async () => {
    try {
      const response = await axios.get("/university-filter/filtered-universities-list");
      setUniversities(response.data);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  // Fetch universities with filters applied
  const applyFilters = async () => {
    try {
      const query = new URLSearchParams(filters).toString(); // Build query string from filters
      const response = await axios.get(`/university-filter/filtered-universities-list?${query}`);
      setUniversities(response.data);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Universities</h1>
      {/* Filters */}
      <div>
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={filters.specialization}
          onChange={handleChange}
        />
        <input
          type="text"
          name="examsAccepted"
          placeholder="Exams Accepted (comma separated)"
          value={filters.examsAccepted}
          onChange={handleChange}
        />
        <input
          type="number"
          name="fees"
          placeholder="Maximum Fees"
          value={filters.fees}
          onChange={handleChange}
        />
        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Display University List */}
      <div>
        {universities.map((university, index) => (
          <div key={index} className="university-card">
            <img src={university.imageUrl} alt={university.universityName} />
            <h3>{university.universityName}</h3>
            <p>{university.location}</p>
            <p>{university.fees}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityList;
