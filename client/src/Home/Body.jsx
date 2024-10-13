import Home from "./Home.jsx";
import VisaInfo from "./VisaInfo.jsx";
import VisaSteps from "./VisaSteps.jsx";
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
