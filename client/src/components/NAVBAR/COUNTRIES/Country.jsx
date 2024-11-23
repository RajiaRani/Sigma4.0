import { useNavigate, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./Country.css"; 

import { Button } from "@mui/material";

export default function Country({closeSubMenu}) {
    const navigate = useNavigate();
    const location = useLocation();

    // Get current country from URL query parameter
    const currentCountry = new URLSearchParams(location.search).get("country");

    const handleCountryClick = (country) => {
        navigate(`/universities/MS-PG?country=${country}`);
    };

    return (
        <div className="country">
               <RxCross2 className="close-icon" onClick={closeSubMenu} />
            <ul className="g-level2">
                {["USA", "Canada", "UK", "Germany", "Ireland"].map((country) => (
                    <li key={country}  onClick={() => handleCountryClick(country)}
                    className={currentCountry === country ? "active" : ""}>
                        <Button>
                            {country}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
