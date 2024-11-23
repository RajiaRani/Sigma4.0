import logo from "../../assets/IMAGES/AllLogos/small-logo-transparent.png"
import instagram from "../../assets/IMAGES/SocialMedia/instagram.png"
import telegram from "../../assets/IMAGES/SocialMedia/telegram.png"
import facebook from "../../assets/IMAGES/SocialMedia/facebook.png"
import whatsapp from "../../assets/IMAGES/SocialMedia/whatsapp.png"
import Button from '@mui/material/Button'
import { Link } from "react-router-dom"
import { RiCustomerService2Line } from "react-icons/ri"
import { LiaChalkboardTeacherSolid } from "react-icons/lia"
import { RiTodoLine } from "react-icons/ri"
import { FaCheckToSlot } from "react-icons/fa6"
import { RiArrowDropDownFill } from "react-icons/ri"
import { useNavigate, useLocation } from "react-router-dom"
import { RxCross2 } from "react-icons/rx"


import "./Footer.css"
import { useState } from "react"
export default function Footer({ closeSubMenu}) {

    const navigate = useNavigate();
    const location = useLocation();

    // Get current country from URL query parameter
    const currentCountry = new URLSearchParams(location.search).get("country");
    const handleCountryClick = (country) => {
        navigate(`/universities/MS-PG?country=${country}`);
    };

    return (
        <footer>
            <div className=" width last-footer">
                <div className="header-logo">
                    <img src={logo} alt="header-logo" />
                </div>
                <div className="footer-social">
                    <ul className="footer-links">
                        <li><Button><a href="https://wa.me/9121382805"><img src={whatsapp} alt="whatsapp" /></a></Button></li>
                        <li><Button>< a href="https://www.instagram.com/i_am_abroadhub/"><img src={instagram} alt="instagram" /></a></Button></li>
                        <li><Button><a href="https://t.me/AbroadHub"><img src={telegram} alt="telegram" /></a></Button></li>
                        <li><Button><a href="https://www.facebook.com/people/Abroad-Hub/pfbid0ojTy5f1ZgUCcVgFDqGTB97jurzG4b3ZNZbaqrTxVzdVDgEySDhEQTbbpVdCmfbPol/"><img src={facebook} alt="facebook" /> </a></Button></li>

                    </ul>
                </div>
            </div>
            <div className="footer-container">
                <div className="topInfo row width">
                    <div className="col align-items-center">
                        <span><RiCustomerService2Line /></span>
                        <span>Talk To Experts</span>

                    </div>
                    <div className="col  align-items-center">
                        <span> <LiaChalkboardTeacherSolid /> </span>
                        <span>Guide Step by Step</span>
                    </div>
                    <div className="col  align-items-center">
                        <span> < RiTodoLine /></span>
                        <span>Shortlist Universities</span>
                    </div>
                    <div className="col  align-items-center">
                        <span>< FaCheckToSlot /> </span>
                        <span>Book Visa Slot</span>
                    </div>
                </div>



                <div className="row footer-middle width">
                    <div className="col">
                        <ul>
                            <li className="g-level1">
                                <Button className="d-flex" >COURSES <RiArrowDropDownFill className="ms-auto" /></Button>
                                <div className="submenu">
                                <RxCross2 className="close-icon" onClick={closeSubMenu} />
                                    <ul className="g-level2">
                                        <li><Link to="#">CSE & Technology</Link></li>
                                        <li><Link to="#"> Business & Management</Link></li>
                                        <li><Link to="#">Engineering</Link></li>
                                        <li><Link to="#">Medicine & Healthcare</Link></li>
                                        <li><Link to="#">Law </Link></li>
                                        <li><Link to="#">Arts & Humanities</Link></li>
                                        <li><Link to="#">Natural Sciences </Link></li>
                                        <li><Link to="#">Social Sciences </Link></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="col">
                        <ul>
                            <li className="g-level1">
                                <Button>COUNTRIES <RiArrowDropDownFill /></Button>
                                <div className="submenu">
                                <RxCross2 className="close-icon" onClick={closeSubMenu} />
                                <ul className="g-level2">
                                    {["USA", "Canada", "UK", "Germany", "Ireland"].map((country) => (
                                        <li key={country} onClick={() => handleCountryClick(country)}
                                            className={currentCountry === country ? "active" : ""}>
                                            <Link>
                                                {country}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul>
                            <li className="g-level1">
                                <Button>UNIVERSITIES <RiArrowDropDownFill /></Button>
                                <div className="submenu">
                                <RxCross2 className="close-icon" onClick={closeSubMenu} />
                                    <ul className="g-level2">
                                        <li><Link to="#">MS University </Link></li>
                                        <li><Link to="#">MBA  </Link></li>
                                        <li><Link to="#">BE/BTech </Link></li>
                                        <li><Link to="#"> NEng </Link></li>
                                        <li><Link to="#"> MIM </Link></li>
                                        <li><Link to="#"> BBA </Link></li>
                                        <li><Link to="#"> CSE</Link></li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul>
                            <li className="g-level1">
                                <Button>EXAMS <RiArrowDropDownFill /></Button>
                                <div className="submenu">
                                <RxCross2 className="close-icon" onClick={closeSubMenu} />
                                    <ul className="g-level2">
                                        <li><Link to="#">IELTS </Link></li>
                                        <li><Link to="#">TOEFL  </Link></li>
                                        <li><Link to="#"> DET </Link></li>
                                        <li><Link to="#"> PET </Link></li>
                                        <li><Link to="#">GRE </Link></li>
                                        <li><Link to="#">GMAT </Link></li>
                                        <li><Link to="#">SAT </Link></li>
                                    </ul>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className="g-level1">
                                <Button>Loan <RiArrowDropDownFill /></Button>
                                <div className="submenu">
                                <RxCross2 className="close-icon" onClick={closeSubMenu} />
                                    <ul className="g-level2">
                                        <li><Link to="#">Student Loan</Link></li>
                                        <li><Link to="#">Loan Eligibility </Link></li>
                                        <li><Link to="#">Interest Rate </Link></li>
                                        <li><Link to="#">Repayment Options </Link></li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="copyright row">
                    <p>&copy; All Rights are reserved by AbroadHub.</p>
                </div>

            </div>
        </footer>
    )
}