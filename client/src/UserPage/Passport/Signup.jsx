import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import { TextField, Button } from "@mui/material";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import "./Common.css";
import axios from "axios";

export default function Signup() {
    const [userName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    // Fetch Signup Page (GET Request)
    useEffect(() => {
        axios.get("/auth/signup")
        .then((response) => {
            console.log("Page Loaded", response.data);
        })
        .catch((error) => {
            console.error("Error loading signup page:", error);
        })
    }, []);



    const handleSigUp = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!userName) {
            newErrors.userName = "Name is required.";
        }
        if (!Email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
            newErrors.Email = "Email is required";
        }
        if (!Password || Password.length < 6) {
            newErrors.Password = "Password is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log("Form submitted:", { userName, Email});
            navigate("/success"); // Redirect to success page or desired route
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
                                    Already have an account?{" "}
                                    <Link to="/auth/login">Log in</Link>
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
