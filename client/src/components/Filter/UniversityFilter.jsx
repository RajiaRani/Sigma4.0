// UniversityFilter.jsx
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";

export default function UniversityFilter({ onUniversitySelect, availableUniversities = [], selectedUniversity }) {
    const [universitySearchTerm, setUniversitySearchTerm] = useState("");
    const [filteredUniversities, setFilteredUniversities] = useState(availableUniversities);

    useEffect(() => {
        setFilteredUniversities(
            availableUniversities.filter(university =>
                university.toLowerCase().includes(universitySearchTerm.toLowerCase())
            )
        );
    }, [universitySearchTerm, availableUniversities]);

    return (
        <div className="Filter-container">
            <h3>Filter by University</h3>
            <div className="filter-btn">
                <CiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search University"
                    value={universitySearchTerm}
                    onChange={(e) => setUniversitySearchTerm(e.target.value)}
                    className="search-input"
                />
                {universitySearchTerm && <MdClear className="clear-icon" onClick={() => setUniversitySearchTerm("")} />}
            </div>
            <div className="university-radio-group scrollable-list">
                {filteredUniversities.map((university) => (
                    <div key={university} className="radio-option">
                        <input
                            type="radio"
                            id={university}
                            name="university"
                            value={university}
                            checked={selectedUniversity === university}
                            onChange={() => onUniversitySelect(university)}
                        />
                        <label htmlFor={university}>{university}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}
