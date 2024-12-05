import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import "./SignUp.css";
import { Button } from "@mui/material";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export default function Signup() {
    
    const navigate = useNavigate();
    const handleSigUp = async (event) => {
        event.preventDefault();

        // Form Validation
        if (!userName || !Email || !Password) {
            setErrorMessage("All fields are required.");
            return;
        }
    };

    return (
        <>
            <div>
                <Navbar />
                <div className="main-container">
                    <h2>Signup to get started</h2>
                    <p>Start your journey with AbroadHub.</p>

                    <div className="bg-image">
                        {/* Form Section */}
                        <form className="user-form" onSubmit={handleSigUp}>
                            {/* Name Input */}
                            <div className="input-wrapper">
                                <FaUser className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-input"
                                
                                />
                            </div>

                            {/* Email Input */}
                            <div className="input-wrapper">
                                <BiLogoGmail className="input-icon" />
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    className="form-input"
                                    
                                />
                            </div>

                            {/* Password Input */}
                            <div className="input-wrapper">
                                <RiLockPasswordFill className="input-icon" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-input"
                                 
                                />
                            </div>

                            <button className="user-button" type="submit">
                                Sign Up
                            </button>

                            {/* Login Redirect */}
                            <div>
                                <p>
                                    Already have an account? <Link to="/auth/login">Log in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
