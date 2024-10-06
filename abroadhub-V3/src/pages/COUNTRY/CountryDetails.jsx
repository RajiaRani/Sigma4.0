
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
        
        <Footer/>
        </>
    );
}
