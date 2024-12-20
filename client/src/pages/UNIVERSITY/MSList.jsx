import "./ListCommonStyle.css";
import "../../styles/global.css";
import { useEffect, useState } from "react";
import { fetchUniversity } from "../../services/api";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";
import CountryFilter from "../../components/Filter/CountryFilter.jsx";
import { Link, useLocation } from "react-router-dom";

export default function MSList() {
    const [universityData, setUniversityData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const loadAllUniversities = async () => {
            try {
                setLoading(true);
                const data = await fetchUniversity();
                setUniversityData(data);
                setFilteredData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching universities:", error);
                setError("Failed to load universities");
                setLoading(false);
            }
        };
        loadAllUniversities();
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const country = searchParams.get("country");
        if (country) {
            setSelectedCountry(country);
            handleFilter({ country });
        }
    }, [location.search, universityData]);

    const handleFilter = ({ country = "", universityName = "" }) => {
        let filtered = universityData;

        if (country) {
            filtered = filtered.filter(
                (university) => university.countryName?.toLowerCase() === country.toLowerCase()
            );
        }

        if (universityName) {
            filtered = filtered.filter(
                (university) => university.universityName?.toLowerCase().includes(universityName.toLowerCase())
            );
        }

        setFilteredData(filtered);
        setError(filtered.length ? null : "No universities found matching the selected filters.");
    };

    if (loading) {
        return <div>Loading universities...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const introHeading = selectedCountry
        ? `Discover Universities in ${selectedCountry}`
        : "Explore Country Vise Global Universities ";

    const introText = selectedCountry
        ? `Embark on an academic journey in ${selectedCountry} with our curated selection of universities. Explore standout programs designed to shape your future in fields like engineering, business, medicine, and more.`
        : `Discover renowned universities worldwide, offering transformative programs across various fields. Whether you're eyeing studies in the USA, UK, Canada, Germany, or Ireland, our listings offer tailored details on each university.`;

    return (
        <>
            <Navbar />
            <div className="body-container">
                <section className="uni-main-container">
                    <h4>{introHeading}</h4>
                    <p>{introText}</p>
                    <br />
                    <div className="uni-container">
                        <div className="uni-list-leftSide-container">
                            <CountryFilter
                                onFilter={handleFilter}
                                availableCountries={["USA", "Canada", "UK", "Germany", "Ireland"]}
                                selectedCountry={selectedCountry}
                                setSelectedCountry={setSelectedCountry}
                            />
                        </div>
                        <div className="uni-list-rightSide-container">
                            {filteredData.map((university, uniIndex) => (
                                <ul className="uni-list-container" key={uniIndex}>
                                    <li className="university-container">
                                        <Link to={`/universities/${university._id}`} className="universities-cards-info-link">
                                            <div className="universities-cards">
                                                <div className="universities-cards-info">
                                                    <div className="uni-image">
                                                        <img src={university.imageUrl} alt={`${university.universityName} image`} />
                                                    </div>
                                                    <div className="uni-basic-info">
                                                        <h6>{university.universityName}</h6>
                                                        <p><FaLocationDot /> {university.location} | {university.uniType}</p>
                                                        <hr />
                                                        <p>1st Year Tuition Fees:</p>
                                                        <p>{university.fees}</p>
                                                        {university.PG && university.PG.map((course, courseIndex) => (
                                                            <div key={courseIndex} className="course-details">
                                                                <p>Course: {course.courseName}</p>
                                                                <p>Duration: {course.duration}</p>
                                                                <p>Price: {course.price}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
