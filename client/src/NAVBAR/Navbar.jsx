import "./Navbar.css"
import "../App.css"
import logo from "../assets/AllLogos/small-logo-transparent.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FcCallback } from "react-icons/fc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import instagram from "../assets/SocialMedia/instagram.png"
import telegram from "../assets/SocialMedia/telegram.png"
import facebook from "../assets/SocialMedia/facebook.png"
import whatsapp from "../assets/SocialMedia/whatsapp.png"

import { useState } from "react";
export default function Navbar() {
    const currentYear = new Date().getFullYear() + 1;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };


    return (
        <>
            <header>
                <div className="navbar-upper">
                    <p className="headline">Spring and Fall {currentYear} Applications Now Open!<a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform"> GET A FREE COUNSELLING!</a></p>
                    <div>
                        <ul className="navbar-upper-links">
                            <li className="contact"><span>Contact</span>
                                <ul className="dropdown-menu">
                                    <li><FcCallback className="icon" /> (+91)91213-82805</li>
                                    <li><TfiHeadphoneAlt className="icon" /> &nbsp;
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform">Free Counseling</a>
                                    </li>
                                    <li><MdOutlineEmail className="icon" /> &nbsp;
                                        <a href="mailto:abroadhub.consult@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services.">Send Email</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="social"><span>Social</span>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="https://wa.me/9121382805" target="_blank" rel="noopener noreferrer">
                                            <img src={whatsapp} alt="whatsapp" /> &nbsp;Whatsapp
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/i_am_abroadhub/" target="_blank" rel="noopener noreferrer">
                                            <img src={instagram} alt="instagram" /> &nbsp;Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/people/Abroad-Hub/pfbid0ojTy5f1ZgUCcVgFDqGTB97jurzG4b3ZNZbaqrTxVzdVDgEySDhEQTbbpVdCmfbPol/" target="_blank" rel="noopener noreferrer">
                                            <img src={facebook} alt="facebook" /> &nbsp;Facebook

                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/AbroadHub" target="_blank" rel="noopener noreferrer">
                                            <img src={telegram} alt="telegram" /> &nbsp;Telegram
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href=""><span>FreeCall</span></a></li>
                        </ul>
                    </div>


                </div >


                <div className="navbar-container">
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="lower-links">
                        <ul className={`navbar-lower-links ${isMenuOpen ? "open" : ""}`}>
                            <li><span>HOME</span></li>
                            <li className="course">
                                <span>COURSES</span>
                                <ul className="dropdown-menu">
                                           <li><Link to="#">CSE & Technology</Link></li>
                                         <li><Link to="#"> Business & Management</Link></li>
                                         <li><Link to="#">Engineering</Link></li>
                                         <li><Link to="#">Medicine & Healthcare</Link></li>
                                         <li><Link to="#">Law </Link></li>
                                         <li><Link to="#">Arts & Humanities</Link></li>
                                         <li><Link to="#">Natural Sciences </Link></li>
                                         <li><Link to="#">Social Sciences </Link></li>
                                </ul>

                            </li>
                            <li className="countries">
                                <span>COUNTRIES</span>
                                <ul className="dropdown-menu">
                                           <li><Link to="#">USA </Link></li>
                                        <li><Link to="#">Canada  </Link></li>
                                        <li><Link to="#"> UK </Link></li>
                                         <li><Link to="#">Australia </Link></li>
                                         <li><Link to="#"> Germony </Link></li>
                                        <li><Link to="#">Ireland  </Link></li>
                                        <li><Link to="#">France </Link></li>
                                         <li><Link to="#">More Countries</Link></li>
                                </ul>
                            </li>
                            <li className="unniversities">
                                <span>UNIVERSITIES</span>
                                <ul className="dropdown-menu">
                                <li><Link to="#">MS University </Link></li>
                                       <li><Link to="#">MBA  </Link></li>
                                         <li><Link to="#">BE/BTech </Link></li>
                                         <li><Link to="#"> NEng </Link></li>
                                         <li><Link to="#"> MIM </Link></li>
                                        <li><Link to="#"> BBA </Link></li>
                                        <li><Link to="#"> CSE</Link></li>
                                </ul>
                            </li>
                            <li className="exams">
                                <span>EXAMS</span>
                                <ul className="dropdown-menu">
                                <li><Link to="#">IELTS </Link></li>
                                         <li><Link to="#">TOEFL  </Link></li>
                                         <li><Link to="#"> DET </Link></li>
                                         <li><Link to="#"> PET </Link></li>
                                        <li><Link to="#">GRE </Link></li>
                                         <li><Link to="#">GMAT </Link></li>
                                         <li><Link to="#">SAT </Link></li>
                                </ul>
                            </li>
                            <li className="loan">
                                <span>LOAN</span>
                                <ul className="dropdown-menu">
                                    <li>Student Loans</li>
                                    <li>Loan Eligibility</li>
                                    <li>Interest Rates</li>
                                    <li>Repayment Options</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* For Mobile Hamburger */}
                    <div id="mobile">
                        {!isMenuOpen ? (
                            <RxHamburgerMenu onClick={toggleMenu} className="hamburger" />
                        ) : (
                            <RxCross2 onClick={toggleMenu} className="cross" />
                        )}
                    </div>
                </div>



            </header >
        </>
    )
}