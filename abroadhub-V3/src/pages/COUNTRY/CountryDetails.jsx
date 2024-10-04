
import "./CountryDetails.css"
import "../../styles/global.css";
import Navbar from "../../components/NAVBAR/Navbar.jsx";
import Footer from "../../components/FOOTER/Footer.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountryDetailsById } from "../../services/api.js";


export default function CountryDetails() {
    const { id } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        const getCountryDetails = async () => {
            try {
                const data = await fetchCountryDetailsById(id); 
                setCountryDetails(data); 
            } catch (error) {
                console.log("Failed to fetch the details", error);
            }
        };
        getCountryDetails();
    }, [id]); 

    if (!countryDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Navbar/>
        <div className="country-details">
    <h1>{countryDetails?.countryName || "Country Name Unavailable"}</h1>
    <p>{countryDetails?.description || "No description available for this country."}</p>

    {/* Display each visa type */}
    <div>
    {countries.map((country, index) => (
        <div key={index} className="country-card">
          <img src={country.image} alt={country.countryName} className="country-flag" />
          <h2>{country.countryName}</h2>
          <p>{country.description}</p>

          {/* Display Visa Types for the Country */}
          {country.visaTypes.map((visaType, i) => (
            <div key={i} className="visa-card">
              <h3>Visa Type: {visaType.visaType}</h3>
              <img src={visaType.image} alt={visaType.visaType} className="visa-image" />
              <p>{visaType.description}</p>

              {/* Visa Steps */}
              <div>
                <h4>Visa Steps:</h4>
                {visaType.visaSteps.map((step, stepIndex) => (
                  <div key={stepIndex} className="visa-step">
                    <h5>{step.title}</h5>
                    <p>{step.description}</p>
                    <ul>
                      {step.steps.map((singleStep, singleStepIndex) => (
                        <li key={singleStepIndex}>{singleStep}</li>
                      ))}
                    </ul>

                    {/* Eligibility */}
                    <div>
                      <h5>Eligibility:</h5>
                      {step.eligibility.map((eligibilityItem, eligibilityIndex) => (
                        <p key={eligibilityIndex}>{eligibilityItem.description}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
</div>

        <Footer/>
        </>
    );
}
