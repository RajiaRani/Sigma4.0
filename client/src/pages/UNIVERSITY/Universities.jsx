import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "./Universities.css";
import { fetchUniversity } from "../../services/api";

export default function Universities() {
    const [universityData, setUniversityData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const numberOfDots = 5;


    const scrollRef = useRef(null);

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

    // Auto-scroll logic
    useEffect(() => {
        if (universityData.length > 0) {
            const intervalId = setInterval(() => {
                scrollRight();
            }, 3000);
            return () => clearInterval(intervalId); // Clear interval on component unmount
        }
    }, [activeIndex, universityData]);

    // Function to scroll right and update active dot
    const scrollRight = () => {
        if (scrollRef.current) {
            const nextIndex = (activeIndex + 1) % universityData.length;
            scrollRef.current.scrollBy({ left: 400, behavior: "smooth" }); // Adjust the scroll value to match your item width
            setActiveIndex(nextIndex);
        }
    };

    // Function to scroll left manually
    const scrollLeft = () => {
        if (scrollRef.current) {
            const prevIndex = (activeIndex - 1 + universityData.length) % universityData.length;
            scrollRef.current.scrollBy({ left: -400, behavior: "smooth" }); // Scroll left
            setActiveIndex(prevIndex);
        }
    };

    // Function to scroll to a specific index when a dot is clicked
    const scrollToIndex = (index) => {
        const scrollAmount = index * 300; // Adjust scroll value based on item width
        scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
        setActiveIndex(index);
    };

    if (loading) {
        return <div>Loading universities ....</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="main-container">
            <section className="section">
                <div className="universities">
                    <h1>Universities For MS/PG Programs</h1>
                    <Link to="/universities/MS-PG"><li>View All</li></Link>
                    {/* <div className="scroll-buttons">
                        <button onClick={scrollLeft}>&lt;</button>
                        <button onClick={scrollRight}> &gt;</button>
                    </div> */}

                    {/* Scrollable list */}
                    <ul className="scroll-container" ref={scrollRef}>
                        {universityData.map((countryData, index) => (
                            <li className="university-container" key={index}>
                                <div className="universities-heading">
                                    {/* <h2>Country: {countryData.countryName}</h2> */}
                                </div>
                                {/* Now iterate over the universities in each country */}
                                <div className="university-cards">
                                    {countryData.universities.map((university, uniIndex) => (
                                        <div key={uniIndex} className="university-card">
                                            <img src={university. imageUrl} alt="university-image" />
                                            <p>{university.universityName}</p>
                                            <p>Location: {university.location}</p>
                                            <p>Fee: {university.fees}</p>
                                            <p>Type: {university.uniType}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Dots for navigation */}
                    <div className="dots">
                        {Array.from({ length: numberOfDots }).map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${activeIndex === index ? "active" : ""}`}
                                onClick={() => scrollToIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
