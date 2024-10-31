import { RiArrowDropDownFill } from "react-icons/ri";
import { useState } from "react";
import logo from "../../assets/IMAGES/AllLogos/small-logo-transparent.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import Country from "./COUNTRIES/Country.jsx";
import University from "./UNIVERSITIES/University.jsx";
import Courses from "./COURSES/Courses.jsx";
import Exams from "./EXAMS/Exams.jsx";
import Loan from "./LOAN/Loan.jsx";

export default function LowerNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <div className="global-wrapper d-flex  ">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>

                <div className="lowerWrap">
                    <div className="lower-links" id="_lowerNav">
                        <ul className={`nav d-flex ${isMenuOpen ? "open" : "close"}`} >
                            {/* <div className="d-flex nav-mobile align-items-center">
                                <div className="logo-container">
                                    <img src={logo} alt="logo" />
                                </div>
                                <RxCross2 onClick={toggleMenu} className="cross"/>
                            </div> */}

                            <li className="g-level1"><Button><Link to="/"> <LiaHomeSolid /> HOME</Link></Button></li>
                            <li className="g-level1">
                                <Button className="d-flex" >COURSES <RiArrowDropDownFill className="ms-auto" /></Button>
                                <div className="submenu shadow">
                                    <Courses/>
                                </div>
                            </li>
                            <li className="g-level1">
                                <Button>COUNTRIES <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                  <Country/>
                                </div>
                            </li>
                            <li className="g-level1">
                                <Button>UNIVERSITIES <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                    <University/>
                                </div>
                            </li>
                            <li className="g-level1">
                                <Button>EXAMS <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                   <Exams/>
                                </div>

                            </li>
                            <li className="g-level1">
                                <Button>Loan <RiArrowDropDownFill /></Button>
                                <div className="submenu shadow">
                                    <Loan/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="user">
                    {/* <Link to="#"><Button><FaUserCircle /></Button></Link> */}
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