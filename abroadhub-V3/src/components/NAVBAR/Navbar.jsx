import "./Navbar.css"
import "../../styles/global.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FcCallback } from "react-icons/fc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import instagram from "../../assets/IMAGES/SocialMedia/instagram.png"
import telegram from "../../assets/IMAGES/SocialMedia/telegram.png"
import facebook from "../../assets/IMAGES/SocialMedia/facebook.png"
import whatsapp from "../../assets/IMAGES/SocialMedia/whatsapp.png"
import { IoMdCall } from "react-icons/io";
import LowerNav from "./LowerNav";
import "./Media.css";

export default function Navbar() {
    const currentYear = new Date().getFullYear() + 1;
    
    return (
        <>
            <header>
                <div className="navbar-upper d-flex  bg-color">
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
                                <Button className="contact-icon">< IoMdCall /></Button>
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
                            <li className="login"><Link to="#"><Button>Log in</Button></Link></li>
                            <li className="signup"><Link to="#"><Button>Sign Up</Button></Link></li>
                        </ul>
                    </div>


                </div >


                <div className="navbar-container ">
                    <LowerNav/>
                </div>
            </header >
        </>
    )
}