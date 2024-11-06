// CountryFilter.jsx
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import "./CommonStyle.css";

export default function CountryFilter({
    onFilter,
    availableCountries = [],
    selectedCountry,
    setSelectedCountry,
    selectedUniversity,
}) {
    const [countrySearchTerm, setCountrySearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(availableCountries);

    // Filter countries by search term
    useEffect(() => {
        setFilteredCountries(
            availableCountries.filter((country) =>
                country.toLowerCase().includes(countrySearchTerm.toLowerCase())
            )
        );
    }, [countrySearchTerm, availableCountries]);


    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        onFilter({ country, universityName: selectedUniversity });
    };

    const clearCountrySearch = () => setCountrySearchTerm("");

    return (
        <div className="Filter-container">
            {/* Country Filter */}
            <div className="filter-container">
                <h3>Filter by Country</h3>
                <div className="filter-btn">
                    <CiSearch className="search-icon"  />
                    <input
                        type="text"
                        placeholder="Search Country"
                        value={countrySearchTerm}
                        onChange={(e) => setCountrySearchTerm(e.target.value)}
                        className="search-input"
                    />
                    {countrySearchTerm && (
                        <MdClear className="clear-icon" onClick={clearCountrySearch} />
                    )}
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
                            <label htmlFor={country} className={selectedCountry === country ? "active" : ""}>
                                {country}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
