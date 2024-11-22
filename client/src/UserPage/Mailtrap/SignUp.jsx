import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import "./SignUp.css";
import { Button } from "@mui/material";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useAuthStore } from "../../store/authStore";

export default function SignUp() {
    const [Email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // For error feedback
    const [successMessage, setSuccessMessage] = useState(""); // For success feedback

    const navigate = useNavigate();
    const { signup } = useAuthStore();

    const handleSigUp = async (event) => {
        event.preventDefault();

        // Form Validation
        if (!userName || !Email || !Password) {
            setErrorMessage("All fields are required.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(Email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
        if (Password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        try {
            // Call the signup function
            await signup(Email, Password, userName);
            setSuccessMessage("Signup successful! Redirecting to email verification...");
            setErrorMessage(""); // Clear errors
            setTimeout(() => {
                navigate("/auth/verify-email");
            }, 2000); // Delay navigation to allow the user to read the success message
        } catch (error) {
            // Handle error response from the backend
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
            console.error("Signup error:", error);
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
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>

                            {/* Email Input */}
                            <div className="input-wrapper">
                                <BiLogoGmail className="input-icon" />
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    className="form-input"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password Input */}
                            <div className="input-wrapper">
                                <RiLockPasswordFill className="input-icon" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-input"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Password Strength Meter */}
                            <PasswordStrengthMeter password={Password} />

                            {/* Error Message */}
                            {errorMessage && <p className="error-message">{errorMessage}</p>}

                            {/* Success Message */}
                            {successMessage && <p className="success-message">{successMessage}</p>}

                            {/* Submit Button */}
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
