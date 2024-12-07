import axios from "axios";
import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { TextField } from "@mui/material";
import "./Common.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
    const [username, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });

    // Validate Inputs
    const validateInputs = () => {
        let isValid = true;
        const newErrors = { username: "", password: "" };

        if (!username.trim()) {
            newErrors.username = "Usernmae is required.";
            isValid = false;
        } 

        if (!Password.trim()) {
            newErrors.password = "Password is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle Login Submit
    const handleLogIn = async (event) => {
        event.preventDefault();

        if (validateInputs()) {
            try {
                const response = await axios.post(
                    `${BASE_URL}/api/login`,
                    {
                        username:username,
                        password: Password,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = response.data;

                if (response.status === 200) {
                    alert("Logged in successfully!");
                    console.log("User data:", data.user);
                } else {
                    alert(data.message || "Login failed. Please check your credentials.");
                }
            } catch (error) {
                console.log("Error during login:", error.message);

                // Handle specific errors
                if (error.response) {
                    alert(error.response.data.message || "Login failed. Please try again.");
                } else {
                    alert("An error occurred. Please try again later.");
                }
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="main-container">
                <h2>Login</h2>
                <p>Start your journey with AbroadHub.</p>

                <div className="bg-image">
                    <form className="user-form" onSubmit={handleLogIn}>
                        <h3>Welcome Back</h3>

                        {/* username */}
                        <div className="input-wrapper">
                            <BiLogoGmail className="input-icon" />
                            <TextField
                                type="username"
                                label="username"
                                className="form-input"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                error={!!errors.username}
                                helperText={errors.username}
                                fullWidth
                                variant="outlined"
                            />
                        </div>

                        {/* Password */}
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

                        {/* Submit */}
                        <button className="user-button" type="submit">
                            Log In
                        </button>

                        <p>
                            Don't have an account?{" "}
                            <Link to="/signup">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
