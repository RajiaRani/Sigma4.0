import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import "./SignUp.css";
import { Button } from "@mui/material";
import userpage from "../../assets/IMAGES/AllLogos/user-page.jpg";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useAuthStore } from "../../store/authStore";

export default function SignUp() {

    const [Email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const {signup} = useAuthStore();

    const handleSigUp = async(event) => {
        event.preventDefault();
        try {
			await signup(Email, Password, userName);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
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
                        {/* <img src={logo} alt="logo" className="logo-image" /> */}
                        



                        <form className="user-form " onSubmit={handleSigUp} >
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

                        <div className="input-wrapper">
                            < RiLockPasswordFill className="input-icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-input"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <PasswordStrengthMeter password={Password} />
                        <button className="user-button" type="submit">Sign Up</button>
                        <div>
                            <p>Already have an account ? <Link to={"/auth/login"}>Log in</Link></p>
                        </div>

                    </form>
                    </div>
                  
                </div>

   
                <Footer />
            </div>
        </>
    )
}