import "./UniversityDetails.css";
import "../../styles/global.css";
import Navbar from "../../components/NAVBAR/Navbar.jsx";
import Footer from "../../components/FOOTER/Footer.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUniversityDetailsById } from "../../services/api.js";
import { FcNext } from "react-icons/fc";

export default function UniversityDetails(){
  const {id} = useParams();
  const [universityDetails, setUniversityDetails] = useState(null);

  useEffect(() => {
    const getUniversityDetails = async() => {
        try{
         const data = await fetchUniversityDetailsById(id);
         setUniversityDetails(data);
        } catch(error){
          console.log("Failed to fetch the details", error);
        }
    };
    getUniversityDetails();
  }, [id]);



if(!universityDetails){
    return <div>Loading....</div>
}

    return (
        <>
        <Navbar/>
        <div className="main-container-country">

            <div className="background-image backgroundStyle">
               
            </div>
            <h2>{universityDetails.universityName}</h2>
            <a>{universityDetails.location }</a>
            <p>{universityDetails.ranking }</p>
            <p>{universityDetails. fees}</p>
            <p>{universityDetails.acceptanceRate }</p>
            <p>{universityDetails.description }</p>

        </div>
        <Footer/>

        </>
    )
}