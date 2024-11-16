import Footer from "../components/FOOTER/Footer";
import Navbar from "../components/NAVBAR/Navbar";
import "./SignUp.css";
import { Button } from "@mui/material";
import userpage from "../assets/IMAGES/AllLogos/user-page.jpg";
import logo from "../assets/IMAGES/AllLogos/small-logo-transparent.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

export default function SignUp() {

    const [Email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const handleSigUp = (event) => {
        event.preventDefault();
    };


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



                        <form className="user-form " onSubmit={handleSigUp} >
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-input"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="form-input"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-input"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <PasswordStrengthMeter password={password} />
                            <button className="user-button" type="submit">Sign Up</button>

                        </form>
                    </div>
                    <div>
                        <p>Already have an account ? <Link to={"/auth/login"}>Login</Link></p>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}