import Footer from "../../components/FOOTER/Footer";
import Navbar from "../../components/NAVBAR/Navbar";
import "./SignUp.css";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";


export default function Login() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleLogIn= (event) => {
        event.preventDefault();
    };


    return (
        <>
            <div>
                <Navbar />
                <div className="main-container">
                    <h2>Login</h2>
                    <p>Start your journey with AbroadHub.</p>


                    <div className="bg-image">
                        <form className="user-form " onSubmit={handleLogIn} >
                           <h3>Welcome Back</h3>
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
                            <Link to="/auth/forgot-password"  >Forgot password ?</Link>
                            <button className="user-button" type="submit">Log In</button>
                             <p>Dont't have an account? {" "} 
                                <Link to="/auth/signup">Sign Up</Link>
                             </p>
                        </form>
                    
                    </div>

                </div>


                <Footer />
            </div>
        </>
    )


}