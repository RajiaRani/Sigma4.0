import Footer from "../components/FOOTER/Footer";
import Navbar from "../components/NAVBAR/Navbar";
import "./SignUp.css";
import { Button } from "@mui/material";
import userpage from "../assets/IMAGES/AllLogos/user-page.jpg";
import logo from "../assets/IMAGES/AllLogos/small-logo-transparent.png";

export default function SignUp() {
    return (
        <>
            <div>
                <Navbar />
                <div className="main-container">
                    <h2>Signup to get started </h2>
                    <p>Start your journey with AbroadHub.</p>
                    <div className="bg-image">
                        {/* <img src={ userpage} alt="user-page" /> */}
                        <img src={logo} alt="logo" className="logo-image" />



                        <div className="user-form ">
                          
                                <input type="email" placeholder="Email ID" className="form-input" />
                                <input type="password" placeholder="Password" className="form-input" />
                                <input type="text" placeholder="Name" className="form-input" />
                                <Button className="user-button">Sign Up</Button>
                           
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        </>
    )
}