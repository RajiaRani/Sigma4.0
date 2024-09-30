import "./Navbar.css"
import "../../styles/global.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import logo from "../../assets/IMAGES/AllLogos/small-logo-transparent.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FcCallback } from "react-icons/fc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import instagram from "../../assets/IMAGES/SocialMedia/instagram.png"
import telegram from "../../assets/IMAGES/SocialMedia/telegram.png"
import facebook from "../../assets/IMAGES/SocialMedia/facebook.png"
import whatsapp from "../../assets/IMAGES/SocialMedia/whatsapp.png"

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

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
                <div className="navbar-upper d-flex align-items-center bg-color">
                    <p className="headline">Spring and Fall {currentYear} Applications Now Open!<a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform"> GET A FREE COUNSELLING!</a></p>
                    <a className="contact-sm" href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform"> GET A FREE COUNSELLING!</a>
                    <div>
                        <ul className="navbar-upper-links d-flex align-items-center">
                            <li className="upper-link contact">
                                <Button>Contact</Button>
                                <ul className="dropdown-menu shadow">
                                    <li>
                                        <Button><FcCallback className="icon" />(+91)91213-82805</Button>
                                    </li>
                                    <li>
                                        <Button><TfiHeadphoneAlt className="icon" />
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform">FreeCounseling</a></Button>
                                    </li>
                                    <li>
                                        <Button><MdOutlineEmail className="icon" />
                                            <a href="mailto:abroadhub.consult@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services.">Send Email</a>
                                        </Button>
                                    </li>
                                </ul>
                            </li>
                            <li className="upper-link contact-sm">
                                <Button>< IoMdCall /></Button>
                                <ul className="dropdown-menu shadow">
                                    <li>
                                        <Button><FcCallback className="icon" />(+91)91213-82805</Button>
                                    </li>
                                    <li>
                                        <Button><TfiHeadphoneAlt className="icon" />
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform">FreeCounseling</a></Button>
                                    </li>
                                    <li>
                                        <Button><MdOutlineEmail className="icon" />
                                            <a href="mailto:abroadhub.consult@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services.">Send Email</a>
                                        </Button>
                                    </li>
                                </ul>
                            </li>
                            <li className="upper-link social">
                                <Button>Social</Button>
                                <ul className="dropdown-menu shadow">
                                    <li>
                                        <Button> <a href="https://wa.me/9121382805" target="_blank" rel="noopener noreferrer">
                                            <img src={whatsapp} alt="whatsapp" /> Whatsapp
                                        </a></Button>
                                    </li>
                                    <li>
                                        <Button><a href="https://www.instagram.com/i_am_abroadhub/" target="_blank" rel="noopener noreferrer">
                                            <img src={instagram} alt="instagram" /> Instagram
                                        </a></Button>
                                    </li>
                                    <li>
                                        <Button><a href="https://www.facebook.com/people/Abroad-Hub/pfbid0ojTy5f1ZgUCcVgFDqGTB97jurzG4b3ZNZbaqrTxVzdVDgEySDhEQTbbpVdCmfbPol/" target="_blank" rel="noopener noreferrer">
                                            <img src={facebook} alt="facebook" /> Facebook

                                        </a></Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <a href="https://t.me/AbroadHub" target="_blank" rel="noopener noreferrer">
                                                <img src={telegram} alt="telegram" /> Telegram
                                            </a>
                                        </Button>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">
                                <Button>FreeCall</Button>
                            </a></li>
                            <li><Link to="#"><Button>Log in</Button></Link></li>
                            <li><Link to="#"><Button>Sign Up</Button></Link></li>
                        </ul>
                    </div>


                </div >


                <div className="navbar-container ">
                    <div className="global-wrapper d-flex align-items-center">
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="lowerWrap">
                            <div className="lower-links" id="_lowerNav">
                                <ul className="nav d-flex" >
                                    <li><Button> HOME</Button></li>
                                    <li className="g-level1">
                                        <Button >COURSES <RiArrowDropDownFill /></Button>
                                        <div className="submenu">
                                            <ul className="g-level2">
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        CSE & Technology
                                                        <IoIosArrowForward className="ms-auto" />
                                                    </Button>


                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>B.Sc. in Computer Science</li>
                                                            <li>B.Tech / B.E. in Computer Engineering</li>
                                                            <li>M.Sc. in Artificial Intelligence</li>
                                                            <li>M.Tech in Information Technology</li>
                                                            <li>Master of Data Science</li>
                                                            <li>Bachelor of Information Technology</li>
                                                            <li>M.Sc. in Cybersecurity</li>
                                                            <li>Bachelor of Software Engineering</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        Business & Management
                                                        <IoIosArrowForward className="ms-auto" /></Button>
                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>MBA (Master of Business Administration)</li>
                                                            <li>BBA (Bachelor of Business Administration) </li>
                                                            <li>Master in Finance </li>
                                                            <li>B.Com (Bachelor of Commerce)</li>
                                                            <li>M.Sc. in International Business</li>
                                                            <li>M.Sc. in Supply Chain Management </li>
                                                            <li>Bachelor of Economics </li>
                                                            <li>M.Sc. in Marketing</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        Engineering
                                                        <IoIosArrowForward className="ms-auto" />
                                                    </Button>

                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>B.Eng. in Civil Engineering</li>
                                                            <li> M.Sc. in Electrical Engineering</li>
                                                            <li>B.Eng. in Mechanical Engineering </li>
                                                            <li>M.Sc. in Chemical Engineering  </li>
                                                            <li>B.Eng. in Aerospace Engineering </li>
                                                            <li>Master of Environmental Engineering</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        Medicine & Healthcare
                                                        <IoIosArrowForward className="ms-auto" />
                                                    </Button>
                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>MBBS (Bachelor of Medicine, Bachelor of Surgery) </li>
                                                            <li>B.Sc. in Nursing  </li>
                                                            <li>MD (Doctor of Medicine) </li>
                                                            <li>M.Sc. in Public Health </li>
                                                            <li>M.D.S. in Dental Surgery </li>
                                                            <li>Master of Pharmaceutical Sciences  </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        Law
                                                        <IoIosArrowForward className="ms-auto" />
                                                    </Button>
                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>LLB (Bachelor of Laws)  </li>
                                                            <li>LLM (Master of Laws) ( </li>
                                                            <li>B.A. in Criminal Justice  </li>
                                                            <li>Juris Doctor (JD)  </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        Arts & Humanities
                                                        <IoIosArrowForward className="ms-auto" />
                                                    </Button>
                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>B.A. in English Literature </li>
                                                            <li>M.A. in History  </li>
                                                            <li>B.F.A. (Bachelor of Fine Arts)  </li>
                                                            <li>M.A. in Philosophy </li>
                                                            <li>Bachelor of Music  </li>
                                                            <li>Master of Fine Arts (MFA) </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        Natural Sciences
                                                        <IoIosArrowForward className="ms-auto" />
                                                    </Button>
                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>B.Sc. in Physics  </li>
                                                            <li>M.Sc. in Chemistry  </li>
                                                            <li>B.Sc. in Environmental Science  </li>
                                                            <li>M.Sc. in Biotechnology </li>
                                                            <li>B.Sc. in Mathematics </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="g-level3">
                                                    <Button className="m-auto custom-button">
                                                        Social Sciences
                                                        <IoIosArrowForward className="ms-auto" />
                                                    </Button>
                                                    <div className="submenu2 ">
                                                        <ul>
                                                            <li>B.A. in Psychology  </li>
                                                            <li>M.A. in Sociology </li>
                                                            <li>B.A. in Political Science  </li>
                                                            <li>M.Sc. in Social Work  </li>
                                                            <li>B.A. in Anthropology  </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                            <li> </li>
                                                        </ul>

                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className="g-level1">
                                        <Button>COUNTRIES <RiArrowDropDownFill /></Button>
                                        <div className="submenu">
                                            <ul className="g-level2">
                                                <li>demo1</li>
                                                <li>demo1</li>
                                                <li>demo1</li>
                                                <li>demo1</li>

                                            </ul>
                                        </div>

                                    </li>
                                    <li className="g-level1">
                                        <Button>UNIVERSITIES <RiArrowDropDownFill /></Button>
                                        {/* <ul className="lower-dropdown-menu">
                                    <li>Top Universities</li>
                                    <li>Scholarship Opportunities</li>
                                    <li>University Rankings</li>
                                    <li>Admission Process</li>
                                </ul> */}


                                    </li>
                                    <li className="g-level1">
                                        <Button>EXAMS <RiArrowDropDownFill /></Button>
                                        {/* <ul className="lower-dropdown-menu">
                                    <li>IELTS</li>
                                    <li>TOEFL</li>
                                    <li>GRE</li>
                                    <li>GMAT</li>
                                </ul> */}

                                    </li>
                                    <li className="g-level1">
                                        <Button>LOAN <RiArrowDropDownFill /></Button>
                                        {/* <ul className="lower-dropdown-menu">
                                    <li>Student Loans</li>
                                    <li>Loan Eligibility</li>
                                    <li>Interest Rates</li>
                                    <li>Repayment Options</li>
                                </ul> */}

                                    </li>
                                </ul>
                            </div>
                        </div>
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