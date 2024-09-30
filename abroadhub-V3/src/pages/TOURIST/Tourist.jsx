import React, { useEffect, useState, useRef } from "react";
import "./Tourist.css";
import "../../styles/global.css";
import usa from "../../assets/IMAGES/Flag/usa.png";
import canada from "../../assets/IMAGES/Flag/canada.png";
import italy from "../../assets/IMAGES/Flag/italy.png";
import australia from "../../assets/IMAGES/Flag/australia.png";
import dubai from "../../assets/IMAGES/Flag/dubai.png";
import france from "../../assets/IMAGES/Flag/france.png";
import germany from "../../assets/IMAGES/Flag/germany.png";
import newzealand from "../../assets/IMAGES/Flag/newzealand.png";
import swaziland from "../../assets/IMAGES/Flag/swaziland.png";

// Flag array with details for each country
const flags = [
  { src: usa, alt: "USA", title: "USA", link: "https://example.com/usa" },
  { src: canada, alt: "Canada", title: "Canada", link: "https://example.com/canada" },
  { src: australia, alt: "Australia", title: "Australia", link: "https://example.com/australia" },
  { src: italy, alt: "Italy", title: "Italy", link: "https://example.com/italy" },
  { src: dubai, alt: "Dubai", title: "Dubai", link: "https://example.com/dubai" },
  { src: france, alt: "France", title: "France", link: "https://example.com/france" },
  { src: germany, alt: "Germany", title: "Germany", link: "https://example.com/germany" },
  { src: newzealand, alt: "New Zealand", title: "New Zealand", link: "https://example.com/newzealand" },
  { src: swaziland, alt: "Swaziland", title: "Swaziland", link: "https://example.com/swaziland" },
];

export default function Tourist() {
  const flagsPerGroup = 3; // Show 3 flags per group
  const [visibleItems, setVisibleItems] = useState(
    new Array(flags.length).fill(false) // Initialize all flags as invisible
  );

  const flagRefs = useRef([]);

  // Intersection Observer to trigger animation when flags come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only start the staggered animation when the group comes into view
            const index = flagRefs.current.indexOf(entry.target);
            if (index >= 0) {
              staggerReveal(index); // Call stagger reveal when the group is in view
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    flagRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (flagRefs.current) {
        flagRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  // Staggered reveal function
  const staggerReveal = (startIndex) => {
    const groupIndex = Math.floor(startIndex / flagsPerGroup);
    const start = groupIndex * flagsPerGroup;
    const end = start + flagsPerGroup;

    const interval = setInterval(() => {
      setVisibleItems((prevVisibleItems) => {
        const nextItems = [...prevVisibleItems];
        for (let i = start; i < end && i < flags.length; i++) {
          nextItems[i] = true; // Mark flags as visible
        }
        return nextItems;
      });
      clearInterval(interval); // Only reveal the group once
    }, 500); // Delay between groups
  };

  return (
    <div className="main-container">
      <section className="section">
        <div className="tourist-container">
          <h1>Apply Tourist Visa To Following Countries through AbroadHub</h1>
          <div className="carousel-wrapper">
            <div className="carousel">
              {flags.map((flag, i) => (
                <a
                  key={i}
                  href={flag.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`carousel-item ${visibleItems[i] ? "visible" : ""}`}
                  ref={(el) => (flagRefs.current[i] = el)} // Attach each flag to the ref array
                >
                  <h2>{flag.title}</h2>
                  <img src={flag.src} alt={flag.alt} />
                  <div className="title-overlay">{flag.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
