import React, { useRef, useEffect, useState } from "react";
import { fetchCountry } from "../../services/api.js";
import { Link } from "react-router-dom";
import "./Country.css";
import "../../styles/global.css";
import bigben from "../../assets/IMAGES/College/bigben.jpeg";
import frankfurtGr from "../../assets/IMAGES/College/frankfurtGr.jpeg";
import statueOfLiberty from "../../assets/IMAGES/College/statueOfLiberty(USA).webp";
import toronto from "../../assets/IMAGES/College/toronto.jpeg";
import italy from "../../assets/IMAGES/College/italy.jpg";
import australia from "../../assets/IMAGES/College/australia.jpg";
import france from "../../assets/IMAGES/College/france.jpg";
import switzerland from "../../assets/IMAGES/College/Switzerland.jpg";
import newzeland from "../../assets/IMAGES/College/newzeland.jpeg";

export default function Country() {
  const [countries, setCountries] = useState([]); // Store fetched country data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state for fetching issues
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Frontend image mapping
  const universities = {
    USA: statueOfLiberty,
    Canada: toronto,
    UK: bigben,
    Germany: frankfurtGr,
    France: france,
    Italy: italy,
    Australia: australia,
    Switzerland: switzerland,
    "New Zealand": newzeland,
  };

  useEffect(() => {
    const getCountry = async () => {
      try {
        setLoading(true); // Set loading to true before the fetch
        const countryData = await fetchCountry(); // Fetch country data from backend
        console.log(countryData); // Check API response
        if (Array.isArray(countryData)) {
          setCountries(countryData);
        } else {
          throw new Error("Invalid data format");
        }
        setLoading(false); // Set loading to false once the fetch is done
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Failed to fetch country data. Please try again later.");
        setLoading(false); // Set loading to false in case of error
      }
    };
    getCountry();
  }, []);

  useEffect(() => {
    let scrollInterval;
    if (!isHovered) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: 2, // Adjust scroll speed here
            behavior: "smooth",
          });
        }
      }, 30); // Adjust interval time for smooth scrolling
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

  if (loading) {
    return <div>Loading countries...</div>; // Display this while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error message if the fetch fails
  }

  return (
    <div className="main-container">
      <section className="section">
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
              {Array.isArray(countries) && countries.map((country, index) => (
                <div className="image-card" key={index}>
                  <img
                    src={universities[country.countryName] || "defaultImage.jpg"} 
                    alt={country.countryName}
                  />
                  <div className="card-info">
                    <h2>{country.countryName}</h2>
                    <p>{country.description ? country.description.substring(0, 50) : "No description available"}......</p>
                  </div>
                  <div className="hover-content">
                    <h3>Study in {country.countryName}</h3>
                    <p>Read More</p>
                    <Link key={country._id} to={`/country/${country._id}`} className="btn">
                      More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="scroll-button-right" onClick={scrollNext}>
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
