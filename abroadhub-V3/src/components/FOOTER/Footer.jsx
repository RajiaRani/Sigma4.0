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

import "./Footer.css"
export default function Footer(){
    return(
        <footer>
            <div className=" width last-footer">
                    <div class="header-logo">
                        <img src={logo} alt="header-logo" />
                    </div>
                    <div class="footer-social">
                        <ul class="footer-links">
                        <li><Button><a href="https://wa.me/9121382805"><img src={whatsapp} alt="whatsapp"/></a></Button></li>  
                        <li><Button>< a href="https://www.instagram.com/i_am_abroadhub/"><img src={instagram} alt="instagram" /></a></Button></li>
                        <li><Button><a href="https://t.me/AbroadHub"><img src={telegram} alt="telegram" /></a></Button></li>
                        <li><Button><a href="https://www.facebook.com/people/Abroad-Hub/pfbid0ojTy5f1ZgUCcVgFDqGTB97jurzG4b3ZNZbaqrTxVzdVDgEySDhEQTbbpVdCmfbPol/"><img src={facebook} alt="facebook" /> </a></Button></li>
                            
                        </ul>
                    </div>
                </div>
            <div class="footer-container">

            

                <div className="topInfo row width">
                    <div className="col align-items-center">
                        <span><RiCustomerService2Line/></span>
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
                    <p>Courses</p>
                        <ul>
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
                    <div className="col">
                    <p>Countries</p>
                        <ul>
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
                    <div className="col">
                    <p>Universities</p>
                     <ul>
                            <li><Link to="#">MS University </Link></li>
                            <li><Link to="#">MBA  </Link></li>
                            <li><Link to="#">BE/BTech </Link></li>
                            <li><Link to="#"> NEng </Link></li>
                            <li><Link to="#"> MIM </Link></li>
                            <li><Link to="#"> BBA </Link></li>
                            <li><Link to="#"> CSE</Link></li>
                            
                        </ul>
                    </div>
                    
                    <div className="col">
                    <p>Exams</p>
                        <ul>
                        <li><Link to="#"> </Link></li>
                            <li><Link to="#">IELTS </Link></li>
                            <li><Link to="#">TOEFL  </Link></li>
                            <li><Link to="#"> DET </Link></li>
                            <li><Link to="#"> PET </Link></li>
                            <li><Link to="#">GRE </Link></li>
                            <li><Link to="#">GMAT </Link></li>
                            <li><Link to="#">SAT </Link></li>
                        </ul>
                    </div>
                    <div className="col">
                    <p>Loan</p>
                        <ul>
                        <li><Link to="#"> </Link></li>
                            <li><Link to="#">Study Loan  </Link></li>
                            <li><Link to="#"> loan2 </Link></li>
                            <li><Link to="#"> loan3 </Link></li>
                            <li><Link to="#">lon3  </Link></li>
                            <li><Link to="#"> </Link></li>
                            <li><Link to="#"> </Link></li>
                        </ul>
                    </div>
                </div>

               
                <div class="copyright row">
                    <p>&copy; All Rights are reserved by AbroadHub.</p>
                </div>

          </div>
        </footer>
    )
}