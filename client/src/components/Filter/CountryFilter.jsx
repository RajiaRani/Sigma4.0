import React, { useState, useEffect } from "react";
import "./CountryFilter.css";
import { CiSearch } from "react-icons/ci";

export default function CountryFilter({ onFilter, availableCountries }) {
    const [selectedCountry, setSelectedCountry] = useState(""); // Single selected country
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(availableCountries);

    useEffect(() => {
        // Filter country options based on the search term
        setFilteredCountries(
            availableCountries.filter(country =>
                country.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, availableCountries]);

    const handleCountryChange = (country) => {
        setSelectedCountry(country); // Update selected country
        onFilter(country); // Send selected country to parent
    };

    return (
        <div className="filter-container">
            <div className="filter-btn">
                <CiSearch />
                <input
                    type="text"
                    placeholder="Search Country"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Radio buttons for country selection */}
            <div className="country-radio-group">
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
    );
}
