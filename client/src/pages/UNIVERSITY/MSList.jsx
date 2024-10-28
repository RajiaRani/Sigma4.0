import "./ListCommonStyle.css";
import "../../styles/global.css";
import { useEffect, useState } from "react";
import { fetchUniversity } from "../../services/api";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";
import CountryFilter from "../../components/Filter/CountryFilter.jsx";
import { Link } from "react-router-dom";

export default function MSList() {
    const [universityData, setUniversityData] = useState([]); // Full university list
    const [filteredData, setFilteredData] = useState([]); // Filtered university list
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load all universities on page load
    useEffect(() => {
        const loadAllUniversities = async () => {
            try {
                setLoading(true);
                const data = await fetchUniversity();
                setUniversityData(data);
                setFilteredData(data); // Show all universities initially
                setLoading(false);
            } catch (error) {
                console.error("Error fetching universities:", error);
                setError("Failed to load universities");
                setLoading(false);
            }
        };
        loadAllUniversities();
    }, []);

    // Filter universities by country name
    const handleFilter = (countryName) => {
        if (!countryName) {
            setFilteredData(universityData); // Reset to all universities if filter is cleared
            setError(null);
        } else {
            const filtered = universityData.filter(
                (university) => university.countryName && university.countryName.toLowerCase() === countryName.toLowerCase()
            );
            setFilteredData(filtered);
            setError(filtered.length ? null : "No universities found for the selected country.");
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
                    <h1>Universities List</h1> <br />
                    <div className="uni-container">
                        {/* Left Side Search Section */}
                        <div className="uni-list-leftSide-container">
                            <CountryFilter onFilter={handleFilter} availableCountries={["USA", "Canada", "UK", "Germany"]} />
                        </div>
    
                        {/* Right Side University List Section */}
                        <div className="uni-list-rightSide-container">
                            {error ? (
                                <p>{error}</p>
                            ) : (
                                <div>
                                    {filteredData.map((university, uniIndex) => (
                                        <ul className="uni-list-container" key={uniIndex}>
                                            <li className="university-container">
                                                <div className="universities-cards">
                                                    <div className="universities-cards-info">
                                                        <Link to={`/universities/${university._id}`} className="universities-cards-info-link">
                                                            <div className="uni-image">
                                                                <img src={university.imageUrl} alt="university-image" />
                                                            </div>
                                                            <div className="uni-basic-info">
                                                                <h6>{university.universityName}</h6>
                                                                <p><FaLocationDot /> {university.location} | {university.uniType}</p>
                                                                <hr />
                                                                <p>1st year Tuition Fees:</p>
                                                                <p>{university.fees}</p>
                                                                {university.PG && university.PG.map((course, courseIndex) => (
                                                                    <div key={courseIndex} className="course-details">
                                                                        <p>Course: {course.courseName}</p>
                                                                        <p>Duration: {course.duration}</p>
                                                                        <p>Price: {course.price}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Link>
                                                    </div>
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
