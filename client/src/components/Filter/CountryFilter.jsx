import React, { useState, useEffect } from "react";
import "./CountryFilter.css";
import { CiSearch } from "react-icons/ci";

export default function CountryFilter({ onFilter, availableCountries = [], availableUniversities = [] }) {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedUniversity, setSelectedUniversity] = useState("");
    const [countrySearchTerm, setCountrySearchTerm] = useState("");
    const [universitySearchTerm, setUniversitySearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(availableCountries);
    const [filteredUniversities, setFilteredUniversities] = useState(availableUniversities);

    useEffect(() => {
        setFilteredCountries(
            availableCountries.filter(country =>
                country.toLowerCase().includes(countrySearchTerm.toLowerCase())
            )
        );
    }, [countrySearchTerm, availableCountries]);

    useEffect(() => {
        setFilteredUniversities(
            availableUniversities.filter(university =>
                university.toLowerCase().includes(universitySearchTerm.toLowerCase())
            )
        );
    }, [universitySearchTerm, availableUniversities]);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        onFilter({ country });
    };

    const handleUniversityChange = (university) => {
        setSelectedUniversity(university);
        onFilter({ university });
    };

    return (
        <div className="Filter-container">
            {/* Country Filter */}
            <div className="filter-container">
                <h3>Filter by Country</h3>
                <div className="filter-btn">
                    <CiSearch />
                    <input
                        type="text"
                        placeholder="Search Country"
                        value={countrySearchTerm}
                        onChange={(e) => setCountrySearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="country-radio-group scrollable-list">
                    {filteredCountries.map((country) => (
                        <div key={country} className="radio-option">
                            <input
                                type="radio"
                                id={country}
                                name="country"
                                value={country}
                                checked={selectedCountry === country}
                                onChange={() => handleCountryChange(country)}
                            />
                            <label htmlFor={country}>{country}</label>
                        </div>
                    ))}
                </div>
            </div>
            
            <hr />
            <br />

            {/* University Filter */}
            <div className="filter-container">
                <h3>Filter by University</h3>
                <div className="filter-btn">
                    <CiSearch />
                    <input
                        type="text"
                        placeholder="Search University"
                        value={universitySearchTerm}
                        onChange={(e) => setUniversitySearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="country-radio-group scrollable-list">
                    {filteredUniversities.map((university) => (
                        <div key={university} className="radio-option">
                            <input
                                type="radio"
                                id={university}
                                name="university"
                                value={university}
                                checked={selectedUniversity === university}
                                onChange={() => handleUniversityChange(university)}
                            />
                            <label htmlFor={university}>{university}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
