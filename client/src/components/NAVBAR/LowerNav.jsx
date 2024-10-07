import { RiArrowDropDownFill } from "react-icons/ri";
import { useState } from "react";
import logo from "../../assets/IMAGES/AllLogos/small-logo-transparent.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function LowerNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="global-wrapper d-flex align-items-center">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>

                <div className="lowerWrap">
                    <div className="lower-links" id="_lowerNav">
                        <ul className={`nav d-flex ${isMenuOpen ? "open" : ""}`} >
                            <div className="d-flex nav-mobile align-items-center">
                                <div className="logo-container">
                                    <img src={logo} alt="logo" />
                                </div>
                                <RxCross2 onClick={toggleMenu} className="cross" />
                            </div>
                            <li className="g-level1"><Button><Link to="/" style={{color:"#0f3054", textDecoration:"none", fontSize:"14px"}}> HOME</Link></Button></li>
                            <li className="g-level1">
                                <Button className="d-flex" >COURSES <RiArrowDropDownFill className="ms-auto" /></Button>
                                <div className="submenu shadow">
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
                            <li className="g-level1">
                                <Button>COUNTRIES <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                    <ul className="g-level2">
                                        <li><Link to="#">USA </Link></li>
                                        <li><Link to="#">Canada  </Link></li>
                                        <li><Link to="#"> UK </Link></li>
                                        <li><Link to="#">Australia </Link></li>
                                        <li><Link to="#"> Germony </Link></li>
                                        <li><Link to="#">Ireland  </Link></li>
                                        <li><Link to="#">France </Link></li>
                                        <li><Link to="#">More Countries</Link></li>

                                    </ul>
                                </div>
                            </li>
                            <li className="g-level1">
                                <Button>UNIVERSITIES <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
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
                            <li className="g-level1">
                                <Button>EXAMS <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
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
                            <li className="g-level1">
                                <Button>Loan <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                    <ul className="g-level2">
                                        <li><Link to="#">Study Loan  </Link></li>
                                        <li><Link to="#"> loan2 </Link></li>
                                        <li><Link to="#"> loan3 </Link></li>
                                        <li><Link to="#">lon3  </Link></li>
                                        <li><Link to="#"> </Link></li>
                                        <li><Link to="#"> </Link></li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="user">
                    <Link to="#"><Button><FaUserCircle /></Button></Link>
                </div>

                {/* For Mobile Hamburger */}
                <div id="mobile">
                    {!isMenuOpen ? (
                        <RxHamburgerMenu onClick={toggleMenu} className="hamburger" />
                    ) : (
                        <RxCross2 onClick={toggleMenu} className="cross" style={{ display: "none" }} />
                    )}
                </div>
            </div>
        </>
    )
}