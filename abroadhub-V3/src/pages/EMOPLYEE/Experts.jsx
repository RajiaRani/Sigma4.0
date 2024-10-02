import React, { useRef, useEffect, useState } from "react";
import "./Experts.css";
import "../../styles/global.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaTimes } from "react-icons/fa";  // Import the close (X) icon
import expert1 from "../../assets/IMAGES/Experts/chenchuImg.jpeg";
import expert2 from "../../assets/IMAGES/Experts/expert2.png";
import expert3 from "../../assets/IMAGES/Experts/expert3.jpeg";
import expert4 from "../../assets/IMAGES/Experts/expert4.jpeg";

export default function Experts() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // State to handle hover effect
    const [clickedExpertIndex, setClickedExpertIndex] = useState(null); // Track clicked expert for showing the box

    const experts = [
        {
            name: "Chenchu Reddy",
            image: expert1,
            position: "Senior Visa Consultant",
            phoneNumber: "+1234567890",
            whatsapp: "+1234567890",
            googleFormLink: "https://forms.google.com/form1"
        },
        {
            name: "Vinod Reddy",
            image: expert3,
            position: "Regional Manager - AP",
            phoneNumber: "+9876543210",
            whatsapp: "+9876543210",
            googleFormLink: "https://forms.google.com/form2"
        },
        {
            name: "Naveen Sultan",
            image: expert4,
            position: "Regional Manager - TG",
            phoneNumber: "+2345678901",
            whatsapp: "+2345678901",
            googleFormLink: "https://forms.google.com/form3"
        },
        {
            name: "Rajia Rani",
            image: expert2,
            position: "Visa Consultant",
            phoneNumber: "+3456789012",
            whatsapp: "+3456789012",
            googleFormLink: "https://forms.google.com/form4"
        },
        {
            name: "Pavan Kalyan",
            position: "Admission Officer",
            phoneNumber: "+4567890123",
            whatsapp: "+4567890123",
            googleFormLink: "https://forms.google.com/form5"
        }
    ];

    // Auto scroll functionality
    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % experts.length);
            }, 2000);
        }

        return () => clearInterval(interval); // Clean up the interval when the component unmounts
    }, [isHovered, experts.length]);

    // Scroll the container when the activeIndex changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: activeIndex * (scrollRef.current.scrollWidth / experts.length),
                behavior: "smooth",
            });
        }
    }, [activeIndex, experts.length]);

    const handleArrowClick = (direction) => {
        setActiveIndex((prevIndex) => {
            if (direction === "left") {
                return prevIndex === 0 ? experts.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === experts.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    // Handle clicking on the "Get Free Counseling" button
    const handleCounselingClick = (index) => {
        // Toggle the display of the contact card
        setClickedExpertIndex(clickedExpertIndex === index ? null : index);
    };

    // Handle close button
    const handleCloseClick = () => {
        setClickedExpertIndex(null); // Close the contact card
    };

    return (
       <div className="main-container">
        <section className="section">
        <div className="expert-cards-container">
            <h1>Get free counseling for university shortlisting, application and visa!</h1>
            <FaArrowCircleLeft className="scroll-arrow left" onClick={() => handleArrowClick("left")} />

            <div
                className="cards-wrapper"
                ref={scrollRef}
                onMouseEnter={() => setIsHovered(true)}  // Stop auto-scroll on hover
                onMouseLeave={() => setIsHovered(false)} // Resume auto-scroll when not hovered
            >
                {experts.map((expert, index) => (
                    <div className={`expert-card ${index === activeIndex ? "active" : ""}`} key={index}>
                        <img src={expert.image} alt={expert.name} />
                        <h3>{expert.name}</h3>
                        <h4>{expert.position}</h4>
                        <Button 
                            className="free-counseling-btn" 
                            onClick={() => handleCounselingClick(index)}
                        >
                            Get Free Counseling
                        </Button>

                        {/* Display the contact card if the "Get Free Counseling" button was clicked */}
                        {clickedExpertIndex === index && (
                            <div className="contact-card">
                                <FaTimes className="close-btn" onClick={handleCloseClick} />
                                <p>Phone: {expert.phoneNumber}</p>
                                <p>WhatsApp: {expert.whatsapp}</p>
                                <a href={expert.googleFormLink} target="_blank" rel="noopener noreferrer">
                                    Fill out Google Form
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <FaArrowCircleRight className="scroll-arrow right" onClick={() => handleArrowClick("right")} />
        </div>
        </section>
       </div>
    );
}
