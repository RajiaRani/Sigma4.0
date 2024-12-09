import axios from "axios";
import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { TextField } from "@mui/material";
import FlashMessage from "../../components/FLASH/FlashMessage.jsx";
import "./Common.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
    const [username, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    //for Flash messages
    const [flashMessage, setFlashMessage] = useState("");
    const [flashType, setFlashType] = useState(""); 


      // Close flash message
      const closeFlashMessage = () => {
        setFlashMessage("");
        setFlashType("");
    };


    // Validate Inputs
    const validateInputs = () => {
        let isValid = true;
        const newErrors = { username: "", password: "" };

        if (!username.trim()) {
            newErrors.username = "Username is required.";
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
                    { username, password: Password },
                    { headers: { "Content-Type": "application/json" } }
                );
    
                if (response.status === 200) {
                    setFlashMessage("Logged in successfully!");
                    setFlashType("success");
                    console.log("User data:", response.data.user);
                    // Optionally redirect the user
                }
            } catch (error) {
                console.log("Error during login:", error);
    
                if (error.response) {
                    setFlashMessage(error.response.data.message || "Login failed. Please check your credentials.");
                    setFlashType("error");
                } else {
                    setFlashMessage("An error occurred. Please try again later.");
                    setFlashType("error");
                }
            }
        }
    };
    

    return (
        <div>
            <Navbar />
            <div className="main-container">
            <FlashMessage message={flashMessage} type={flashType} onClose={closeFlashMessage} />
                <h2>Login</h2>
                <p>Start your journey with AbroadHub.</p>

                <div className="bg-image">
                    <form className="user-form" onSubmit={handleLogIn}>
                        <h3>Welcome Back</h3>

                        {/* Username */}
                        <div className="input-wrapper">
                            <BiLogoGmail className="input-icon" />
                            <TextField
                                type="text"  // Fixed to "text" for username input
                                label="Username"
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
