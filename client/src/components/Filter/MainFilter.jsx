import React, { useState } from "react";
import CountryFilter from "./CountryFilter";
import UniversityFilter from "./UniversityFilter";
import "./CommonStyle.css";

export default function MainFilterContainer({ onFilter, countries, universities }) {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedUniversity, setSelectedUniversity] = useState("");

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);  
        onFilter({ country, universityName: selectedUniversity });  
    };

    const handleUniversitySelect = (university) => {
        setSelectedUniversity(university);
        onFilter({ country: selectedCountry, universityName: university }); 
    };

    return (
        <div>
            <CountryFilter
                onFilter={handleCountrySelect}
                availableCountries={countries}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
            />
            <UniversityFilter
                onUniversitySelect={handleUniversitySelect}
                availableUniversities={universities}
                selectedUniversity={selectedUniversity}
            />
        </div>
    );
}
