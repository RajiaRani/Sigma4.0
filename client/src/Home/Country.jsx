import React, { useEffect, useRef, useState } from "react";
import "./Country.css";
import "../App.css";
import bigben from "../assets/College/bigben.jpeg";
import frankfurtGr from "../assets/College/frankfurtGr.jpeg";
import statueOfLiberty from "../assets/College/statueOfLiberty(USA).webp";
import toronto from "../assets/College/toronto.jpeg";
import italy from "../assets/College/italy.jpg";
import australia from "../assets/College/australia.jpg";
import france from "../assets/College/france.jpg";
import switzerland from "../assets/College/Switzerland.jpg";
import newzeland from "../assets/College/newzeland.jpeg";

export default function Country() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Static country data
  const countries = [
    { countryName: "USA", description: "Experience world-class education.", image: statueOfLiberty },
    { countryName: "Canada", description: "Explore top-tier education.", image: toronto },
    { countryName: "UK", description: "Immerse in rich academic excellence.", image: bigben },
    { countryName: "Germany", description: "Engage in cutting-edge research.", image: frankfurtGr },
    { countryName: "France", description: "Indulge in artistic heritage.", image: france },
    { countryName: "Italy", description: "Discover ancient history and modern education.", image: italy },
    { countryName: "Australia", description: "Experience vibrant cities and exceptional education.", image: australia },
    { countryName: "Switzerland", description: "Benefit from high-quality education.", image: switzerland },
    { countryName: "New Zealand", description: "Study in a country known for innovative education.", image: newzeland },
  ];

  useEffect(() => {
    let scrollInterval;
    if (!isHovered) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: 1,
            behavior: "smooth",
          });
        }
      }, 30);
    }
    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollPrevious = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="study-container">
      <h1>Apply To Following Countries through AbroadHub</h1>
      <div
        className="scrolling-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="scroll-button-left" onClick={scrollPrevious}>
          <span>&lt;</span>
        </div>
        <div className="study-images" ref={scrollRef}>
          {countries.map((country, index) => (
            <div className="image-card" key={index}>
              <img src={country.image} alt={country.countryName} />
              <div className="card-info">
                <h2>{country.countryName}</h2>
                <p>{country.description}</p>
              </div>
              <div className="hover-content">
                <h3>Study in {country.countryName}</h3>
                <p>Apply now</p>
                <a className="btn">
                  More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-button-right" onClick={scrollNext}>
          <span>&gt;</span>
        </div>
      </div>
    </div>
  );
}
