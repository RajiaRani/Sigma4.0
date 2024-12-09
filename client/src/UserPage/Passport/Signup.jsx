import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import { TextField, Button } from "@mui/material";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for toastify
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Signup() {
    const [userName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSigUp = async (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!userName) {
            newErrors.userName = "Name is required.";
        }
        if (!Email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)) {
            newErrors.Email = "Valid email is required.";
        }
        if (!Password || Password.length < 6) {
            newErrors.Password = "Password must be at least 6 characters.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            try {
                const response = await axios.post(`${BASE_URL}/api/signup`, {
                    username: userName,
                    email: Email,
                    password: Password,
                });

                // Display success toast message
                toast.success("Signup successful! Redirecting...");

                // Reset the form
                setUserName("");
                setEmail("");
                setPassword("");

                // Redirect after a delay to allow the user to see the message
                setTimeout(() => navigate("/"), 2000); // Adjust the route as needed
            } catch (error) {
                console.error("Signup error:", error.response?.data || error.message);

                // Display error toast message
                toast.error(
                    error.response?.data?.message || "Failed to register. Please try again."
                );
            }
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
                        {/* Toast Container for Flash Messages */}
                        <ToastContainer />

                        {/* Form Section */}
                        <form className="user-form" onSubmit={handleSigUp}>
                            {/* Name Input */}
                            <div className="input-wrapper">
                                <FaUser className="input-icon" />
                                <TextField
                                    type="text"
                                    label="Name"
                                    className="form-input"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    error={!!errors.userName}
                                    helperText={errors.userName}
                                    fullWidth
                                    margin="normal"
                                    aria-label="Name"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="input-wrapper">
                                <BiLogoGmail className="input-icon" />
                                <TextField
                                    type="email"
                                    label="Email"
                                    className="form-input"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!errors.Email}
                                    helperText={errors.Email}
                                    fullWidth
                                    margin="normal"
                                    aria-label="Email"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="input-wrapper">
                                <RiLockPasswordFill className="input-icon" />
                                <TextField
                                    type="password"
                                    label="Password"
                                    className="form-input"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={!!errors.Password}
                                    helperText={errors.Password}
                                    fullWidth
                                    margin="normal"
                                    aria-label="Password"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="user-button"
                                fullWidth
                            >
                                Sign Up
                            </Button>

                            {/* Login Redirect */}
                            <div style={{ marginTop: "1rem" }}>
                                <p>
                                    Already have an account? <Link to="/login">Log in</Link>
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
