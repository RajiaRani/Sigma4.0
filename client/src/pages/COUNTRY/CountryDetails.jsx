import "./CountryDetails.css"
import "../../styles/global.css";
import Navbar from "../../components/NAVBAR/Navbar.jsx";
import Footer from "../../components/FOOTER/Footer.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountryDetailsById } from "../../services/api.js";
import { FcNext } from "react-icons/fc";
import sq from "../../assets/IMAGES/AllLogos/sq.png";

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
            <Navbar />
            <div className="main-container-country">
                {/* Use countryDetails instead of countries */}
                <h1>{countryDetails.countryName}</h1>
                <p>{countryDetails.intro}</p>

                <div className="country-image">
                    <img src={countryDetails.countryImage} alt="countryImage" />
                </div>
                {countryDetails.description.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="paragraph">
                        <h5>{section.heading}</h5>
                        <div className="para1">
                            <p>{section.content}</p>
                        </div>
                    </div>
                ))}
                <hr />
                <br />
                <h3><FcNext /> Types of  Universities in {countryDetails.countryName}</h3>
                {
                    countryDetails.universityTypes.map((universityType, universityIndex) => (
                        <div key={universityIndex} className="paragraph university-type">
                            <h5> {universityType.university}</h5>
                            <ul>
                                {
                                    universityType.universityType.map((type, typeIndex) => (
                                        <li key={typeIndex} className="para-list"><img src={sq} alt="sq-image" style={{ width: "16px", height: "16px" }} /> {type}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }


                <hr />
                <br />
                <h2><FcNext /> Visa Types : </h2>
                {countryDetails.visaTypes.map((visaType, visaIndex) => (
                    <div key={visaType.id || visaIndex} className="paragraph">
                        <h5>{visaType.visaType}</h5>
                        <p>{visaType.description}</p>
                        <ul>
                            {visaType.requiredDocuments.map((doc, docIndex) => (
                                <li key={doc.id || docIndex} className="para-list">{doc}</li>
                            ))}
                        </ul>
                        <p>Eligibility: {visaType.eligibility}</p>
                        <p>Cost: Application Fee: ${visaType.cost.applicationFee}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
