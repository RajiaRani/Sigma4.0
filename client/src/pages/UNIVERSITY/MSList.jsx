import "./ListCommonStyle.css";
import "../../styles/global.css";
import { useEffect, useState, useRef } from "react";
import { fetchUniversity } from "../../services/api";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";

export default function MSList() {
    const [universityData, setUniversityData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getUniversity = async () => {
            try {
                const universityData = await fetchUniversity();
                setUniversityData(universityData); // Corrected state update
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load universities");
                setLoading(false); // Set loading to false even if there's an error
            }
        };
        getUniversity();
    }, []);


    if (loading) {
        return <div>Loading universities ....</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Navbar />
            <div className="body-container">
                <section className="main-container">
                    <h1>Universities List</h1>
                    <div className="uni-container">
                        <div className="uni-list-leftSide-container">
                          
                        </div>
                        <div className="uni-list-rightSide-container">
                            <ul className="uni-list-container">
                                {universityData.map((countryData, index) => (
                                    <li className="university-container" key={index}>
                                        <div className="universities-heading">
                                            {/* <h2>Country: {countryData.countryName}</h2> */}
                                        </div>
                                        {/* Now iterate over the universities in each country */}
                                        <div className="universities-cards">
                                            {countryData.universities.map((university, uniIndex) => (
                                                <div key={uniIndex} className="universities-cards-info">
                                                    <div className="uni-image">
                                                        <img src={university.imageUrl} alt="university-image" />
                                                    </div>
                                                    <div className="uni-basic-info">
                                                        <h6>{university.universityName}</h6>
                                                        <p><FaLocationDot /> {university.location} &nbsp; |  {university.uniType}</p>
                                                        <hr />
                                                        <p>1st year Tution Fees:</p>
                                                        <p>{university.fees}</p>
                                                        {university.PG.map((course, courseIndex) => (
                                                            <div key={courseIndex} className="course-details">
                                                                <p>course duration</p>
                                                                <p>{course.duration}</p>
                                                                {/* {course.exams.map((exam, examIndex) => (
                                                                   <p key={examIndex}>
                                                                  <li className="exams">{exam.examName}</li>
                                                                 </p>
                                                                ))} */}
                                                                <button>more</button>
                                                                <button>Help Us</button>
                                                            </div>
                                                        ))}
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>



                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}