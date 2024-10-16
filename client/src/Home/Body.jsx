import Home from "../Home/Home.jsx";
import VisaInfo from "../Home/VisaInfo.jsx";
import VisaSteps from "../Home/VisaSteps.jsx";
import Footer from "../FOOTER/Footer.jsx";
import Navbar from "../NAVBAR/Navbar.jsx";
import Services from "./Services.jsx";
import Experts from "./Experts.jsx";
import Tourist from "./Tourist.jsx";
import Country from "./Country.jsx";
import "./Body.css";

export default function Body() {
    return (
        <div className="body-container">
               <Navbar />
                <Home />
                <Country/>
                <VisaInfo />
                <VisaSteps />
                <Tourist />
                <Services />
                <Experts />
                <Footer />
      
        </div>
    );
}
