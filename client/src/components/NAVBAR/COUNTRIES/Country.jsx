import { useNavigate, useLocation } from "react-router-dom";
import "./Country.css"; 
import { Button } from "@mui/material";

export default function Country() {
    const navigate = useNavigate();
    const location = useLocation();

    // Get current country from URL query parameter
    const currentCountry = new URLSearchParams(location.search).get("country");

    const handleCountryClick = (country) => {
        navigate(`/universities/MS-PG?country=${country}`);
    };

    return (
        <div className="country">
            <ul className="g-level2">
                {["USA", "Canada", "UK", "Germany", "Ireland"].map((country) => (
                    <li key={country}>
                        <Button
                            onClick={() => handleCountryClick(country)}
                            className={currentCountry === country ? "active" : ""}
                        >
                            {country}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
