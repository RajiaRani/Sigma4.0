import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import { BiLogoGmail } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          { username:username, password: Password },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.status === 200) {
          toast.success("Logged in successfully!");
          navigate("/user-dashboard");
        }
      } catch (error) {
        if (error.response) {
          toast.error(
            error.response.data.message || "Login failed. Please check your credentials."
          );
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Box className="main-container">
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          Start your journey with AbroadHub.
        </Typography>
        <Box className="bg-image">
          <ToastContainer />
          <form className="user-form" onSubmit={handleLogIn} noValidate>
            <Typography variant="h5" textAlign="center">
              Welcome Back
            </Typography>

            {/* Username */}
            <Box className="input-wrapper">
              <BiLogoGmail className="input-icon" />
              <TextField
                type="text"
                label="Username"
                className="form-input"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
                fullWidth
                variant="outlined"
              />
            </Box>

            {/* Password */}
            <Box className="input-wrapper">
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
            </Box>

            {/* Submit */}
            <Button className="user-button" variant="contained" fullWidth type="submit">
              Log In
            </Button>

            <Typography textAlign="center" mt={2}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </form>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
