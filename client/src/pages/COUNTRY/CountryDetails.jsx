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
            <div className="main-container">
                {/* Use countryDetails instead of countries */}
                <h1>{countryDetails.countryName}</h1>
                {countryDetails.description.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="paragraph">
                        <h3>{section.heading}</h3>
                       <div className="para1">
                       <p>{section.content}</p>
                        {section.images && section.images.map((img, imgIndex) => (
                            <img key={imgIndex} src={img} alt={section.heading} />
                        ))}
                       </div>
                    </div>
                ))}

                <h3>Visa Types</h3>
                {countryDetails.visaTypes.map((visaType, visaIndex) => (
                    <div key={visaIndex} className="paragraph">
                        <h4>{visaType.visaType}</h4>
                        <p>{visaType.description}</p>
                        <ul>
                            {visaType.requiredDocuments.map((doc, docIndex) => (
                                <li key={docIndex} className="para-list">{doc}</li>
                            ))}
                        </ul>
                        <p>Eligibility: {visaType.eligibility}</p>
                        <p>Cost: Application Fee: ${visaType.cost.applicationFee}</p>
                        {visaType.images && visaType.images.map((img, imgIndex) => (
                            <img key={imgIndex} src={img} alt={visaType.visaType} width="200px" />
                        ))}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
