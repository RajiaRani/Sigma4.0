import { RiArrowDropDownFill } from "react-icons/ri";
import { useState } from "react";
import logo from "../../assets/IMAGES/AllLogos/small-logo-transparent.png"
import { RxHamburgerMenu } from "react-icons/rx";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import Country from "./COUNTRIES/Country.jsx";
import University from "./UNIVERSITIES/University.jsx";
import Courses from "./COURSES/Courses.jsx";
import Exams from "./EXAMS/Exams.jsx";
import Loan from "./LOAN/Loan.jsx";
import "./LowerNav.css";
import MenuItem from "./MenuItem.jsx";
import { FiXSquare } from "react-icons/fi";

export default function LowerNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [activeMenu, setActiveMenu] = useState(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <div className="global-wrapper d-flex ">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>

                <div className="lowerWrap">
                    <div className="lower-links" id="_lowerNav">
                        <ul className="nav d-flex" >


                            <li className="g-level1"><Button><Link to="/"> HOME  <LiaHomeSolid /></Link></Button></li>
                            <li className="g-level1">
                                <Button className="d-flex" >COURSES <RiArrowDropDownFill className="ms-auto" /></Button>
                                <div className="submenu shadow">
                                    <Courses />
                                </div>
                            </li>
                            <li className="g-level1">
                                <Button>COUNTRIES <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                    <Country />
                                </div>
                            </li>
                            <li className="g-level1">
                                <Button>UNIVERSITIES <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                    <University />
                                </div>
                            </li>
                            <li className="g-level1">
                                <Button>
                                    EXAMS
                                    <RiArrowDropDownFill />
                                </Button>
                                <div className="submenu shadow">
                                    <Exams />
                                </div>

                            </li>
                            <li className="g-level1">
                                <Button>Loan <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                    <Loan />
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                    <li className="upper-link user-account">
                                <Button><FaUserCircle className="user-svg" /></Button>
                                <ul className="user-dropdown-menu shadow">
                                    <li className="login"><Button><Link to={"/auth/login"}>Log in</Link></Button></li>
                                    <li className="signup"><Button><Link to={"/auth/signup"}>Sign Up</Link></Button></li>
                                </ul>
                            </li>
                    </div>
        
                </div>




                {/* For Mobile Screen */}
                <div className="lowerWrap mobile-navbar">

                    <div className="lower-links" id="_lowerNav">

                        <ul className={`nav d-flex ${isMenuOpen ? "open" : "close"}`}>
                            <div className="logo-container d-flex " style={{ backgroundColor: "#fff", borderRight: "1px solid #1C3342" }}>
                                <img src={logo} alt="logo" />
                                
                            </div>
                            
                        
                            <div className="mobile-navbar">
                            <li className="g-level1"><Button><Link to="/"> HOME  <LiaHomeSolid /></Link></Button></li>
                                <MenuItem title="COURSES" SubmenuComponent={Courses} />
                                <MenuItem title="COUNTRIES" SubmenuComponent={Country} />
                                <MenuItem title="UNIVERSITIES" SubmenuComponent={University} />
                                <MenuItem title="EXAMS" SubmenuComponent={Exams} />
                                <MenuItem title="LOAN" SubmenuComponent={Loan} />
                            </div>
                        </ul>
                    </div>
                </div>

                {/* For Mobile Hamburger */}
                <div id="mobile">
                    {!isMenuOpen ? (
                        <RxHamburgerMenu onClick={toggleMenu} className="hamburger" />
                    ) : (
                        <FiXSquare onClick={toggleMenu} className="cross" />

                    )}
                </div>
            </div>
        </>
    )
}