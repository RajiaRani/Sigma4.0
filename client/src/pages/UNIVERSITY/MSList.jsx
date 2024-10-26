import "./ListCommonStyle.css";
import "../../styles/global.css";
import { useEffect, useState } from "react";
import { fetchUniversity, fetchUniversitiesByCountry } from "../../services/api";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";
import { Button } from "@mui/material";

export default function MSList() {
    const [universityData, setUniversityData] = useState([]);  // Holds the full university list
    const [filteredData, setFilteredData] = useState([]);      // Holds filtered results based on the search
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countryName, setCountryName] = useState("");        // Country name for search

    // Load all universities on page load
    useEffect(() => {
        const loadAllUniversities = async () => {
            try {
                setLoading(true);
                const data = await fetchUniversity();
                setUniversityData(data);
                setFilteredData(data);  // Initially display all universities
                setLoading(false);
            } catch (error) {
                console.error("Error fetching universities:", error);
                setError("Failed to load universities");
                setLoading(false);
            }
        };
        loadAllUniversities();
    }, []);

    // Trigger filtering based on the country name when the Filter button is clicked
    const handleFilterClick = async () => {
        if (countryName.trim() === "") {
            setFilteredData(universityData);  // Show all universities if input is empty
            setError(null);  // Reset error message when displaying all universities
        } else {
            try {
                setLoading(true);
                setError(null);  // Reset any previous errors
                const data = await fetchUniversitiesByCountry(countryName.trim());
                setFilteredData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                if (error.response && error.response.status === 404) {
                    // Custom message for 404 not found
                    setError("No universities found for the given country.");
                    setFilteredData([]);  // Clear filtered data
                } else {
                    // General error message for other errors
                    console.error("Error fetching universities:", error);
                    setError("Failed to load universities.");
                }
            }
        }
    };

    

    if (loading) {
        return <div>Loading universities...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Navbar />
            <div className="body-container">
                <section className="uni-main-container">
                    <h1>Universities List</h1>
                    <div className="uni-container">
                        {/* Left Side Search Section */}
                        <div className="uni-list-leftSide-container">
                            <div className="filter">
                            <h6>Search Country</h6>
                            <input
                                type="text"
                                value={countryName}
                                onChange={(e) => setCountryName(e.target.value)}
                                placeholder="Enter country name"
                            />
                            <Button onClick={handleFilterClick} >Filter</Button>
                            </div>
                        </div>
    
                        {/* Right Side University List Section */}
                        <div className="uni-list-rightSide-container">
                            {/* Display error message if it exists */}
                            {error ? (
                                <p>{error}</p>
                            ) : (
                           <div>
                                    {filteredData.map((countryData, index) => (
                                        <ul className="uni-list-container">
                                        <li className="university-container" key={index}>
                                            <div className="universities-cards">
                                                {countryData.universities.map((university, uniIndex) => (
                                                    <div key={uniIndex} className="universities-cards-info">
                                                        <div className="uni-image">
                                                            <img src={university.imageUrl} alt="university-image" />
                                                        </div>
                                                        <div className="uni-basic-info">
                                                            <h6>{university.universityName}</h6>
                                                            <p><FaLocationDot /> {university.location} | {university.uniType}</p>
                                                            <hr />
                                                            <p>1st year Tuition Fees:</p>
                                                            <p>{university.fees}</p>
                                                            {university.PG.map((course, courseIndex) => (
                                                                <div key={courseIndex} className="course-details">
                                                                    <p>Course Duration: {course.duration}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </li>
                                        </ul>
                                    ))}
                            </div>
                             
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
    
}
