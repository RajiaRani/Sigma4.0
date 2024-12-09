import axios from "axios";
import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

import { toast, ToastContainer } from "react-toastify"; // Importing toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";// Import CSS for toast notifications
import { useNavigate } from "react-router-dom";
import "./Common.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
    const [username, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    const navigate = useNavigate();

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

                // Log response data for debugging
                console.log("Response:", response);

                if (response.status === 200) {
                    console.log("Logged in successfully, triggering toast...");
                    toast.success("Logged in successfully!"); // Success toast
                    navigate("/");
                }
            } catch (error) {
                console.log("Error during login:", error);

                if (error.response) {
                    toast.error(error.response.data.message || "Login failed. Please check your credentials."); // Error toast
                } else {
                    toast.error("An error occurred. Please try again later."); // Error toast
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

                    <ToastContainer />
           
                    <FormControl variant="standard" className="user-form" onSubmit={handleLogIn}>
                        <h3>Welcome Back</h3>

                        {/* Username */}
                 
                            
                            {/* <TextField
                                type="text"  // Fixed to "text" for username input
                                label="Username"
                                className="form-input"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                error={!!errors.username}
                                helperText={errors.username}
                                fullWidth
                                variant="outlined"
                            /> */}

                            <InputLabel htmlFor="input-with-icon-adornment">
                                Enter username
                            </InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                type="text"  // Fixed to "text" for username input
                                label="Username"
                                className="form-input"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                error={!!errors.username}
                                helperText={errors.username}
                                fullWidth
                                startAdornment={
                                    <InputAdornment position="start">
                                      <BiLogoGmail className="input-icon" />
                                    </InputAdornment>
                                }
                            />
               

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
                    </FormControl>

                </div>
            </div>



            <Footer />
        </div>
    );
}
