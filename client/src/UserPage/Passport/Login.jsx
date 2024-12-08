import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { TextField } from "@mui/material";
import "./Common.css";

export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    // Validate Inputs
    const validateInputs = () => {
        let isValid = true;
        const newErrors = { email: "", password: "" };

        // Validate Email
        if (!Email) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(Email)) {
            newErrors.email = "Please enter a valid email.";
            isValid = false;
        }

        // Validate Password
        if (!Password) {
            newErrors.password = "Password is required.";
            isValid = false;
        } else if (Password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle Form Submit
    const handleLogIn = (event) => {
        event.preventDefault();

        if (validateInputs()) {
            // Call API or Handle Successful Validation
            console.log("Form is valid, send API request", { Email, Password });
        } else {
            console.log("Form has errors");
        }
    };

    return (
        <>
            <div>
                <Navbar />
                <div className="main-container">
                    <h2>Login</h2>
                    <p>Start your journey with AbroadHub.</p>

                    <div className="bg-image">
                        <form className="user-form" onSubmit={handleLogIn}>
                            <h3>Welcome Back</h3>

                            {/* Email Input */}
                            <div className="input-wrapper">
                                <BiLogoGmail className="input-icon" />
                                <TextField
                                    type="email"
                                    label="Email ID"
                                    className="form-input"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!errors.email} // Convert string to boolean
                                    helperText={errors.email} // Show error message
                                    fullWidth
                                    variant="outlined"
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
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    fullWidth
                                    variant="outlined"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="user-button" type="submit">
                                Log In
                            </button>

                            {/* Link to Sign Up */}
                            <p>
                                Don't have an account?{" "}
                                <Link to="/signup">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
