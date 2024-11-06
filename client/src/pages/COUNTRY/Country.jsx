import React, { useRef, useEffect, useState } from "react";
import { fetchCountry } from "../../services/api.js";
import { Link } from "react-router-dom";
import "./Country.css";
import "../../styles/global.css";

export default function Country() {
  const [countries, setCountries] = useState([]); // Store fetched country data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state for fetching issues
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getCountry = async () => {
      try {
        setLoading(true);
        const countryData = await fetchCountry(); // Fetch country data
        console.log("Fetched data:", countryData); // Log the API response to see what you get
        if (Array.isArray(countryData)) {
          setCountries(countryData); // Set countries if data is an array
        } else {
          throw new Error("Invalid data format");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Failed to fetch country data. Please try again later.");
        setLoading(false);
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
              {countries.map((country, index) => {
                // Get the first image from the first section (if available)
                const firstImage =
                  country.description.length > 0 &&
                    country.description[0].images.length > 0
                    ? country.description[0].images[0]
                    : null;

                return (
                  <div className="image-card" key={index}>
                    <div className="card-info">


                      {/* Display only the first image */}
                      {/* {firstImage && (
                        <img
                          src={firstImage}
                          alt={`Image of ${country.countryName}`}
                          className="country-image"
                        />
                      )} */}

                     <img src={country.countryImage} alt="countryImage"/>
                      <h2>{country.countryName}</h2>

                      {country.description.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <p>{section.content.substring(0,30)}</p>
                        </div>
                      ))}
                    </div>

                    <div className="hover-content">
                      <h3>Study in {country.countryName}</h3>
                      <p>Read More</p>
                      <Link
                        key={country._id}
                        to={`/country/${country._id}`}
                        className="btn"
                      >
                        More
                      </Link>
                    </div>
                  </div>
                );
              })}
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
