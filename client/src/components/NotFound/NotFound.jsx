import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/IMAGES/AllLogos/NotFound.jpg"; // Rename the image import
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import "./NotFound.css";

const NotFound = () => {
    return (
        <>
        <Navbar/>
        <div className="notfound">
            <h1>Oops! Page Not Found</h1>
            <img src={NotFoundImage} alt="Cartoon Character Looking Lost"/>
            <p>
                It seems you're lost in the clouds! Why not go <Link to="/">back home</Link>?
            </p>
        </div>
        <Footer/>
        </>
    );
};


export default NotFound;

