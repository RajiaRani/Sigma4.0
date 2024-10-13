import logo from "../assets/AllLogos/small-logo-transparent.png"
import instagram from "../assets/SocialMedia/instagram.png"
import telegram from "../assets/SocialMedia/telegram.png"
import facebook from "../assets/SocialMedia/facebook.png"
import whatsapp from "../assets/SocialMedia/whatsapp.png"
import "./Footer.css"
export default function Footer(){
    return(
        <footer>
            <div class="footer-container">
                    <div class="header-logo">
                        <img src={logo} alt="header-logo" />
                    </div>
                    <div class="footer-social">
                        <ul class="footer-links">
                        <li><a href="https://wa.me/9121382805"><img src={whatsapp} alt="whatsapp"/></a></li>  
                            <li>< a href="https://www.instagram.com/i_am_abroadhub/"><img src={instagram} alt="instagram" /></a></li>
                             <li><a href="https://t.me/AbroadHub"><img src={telegram} alt="telegram" /></a></li>
                            <li><a href="https://www.facebook.com/people/Abroad-Hub/pfbid0ojTy5f1ZgUCcVgFDqGTB97jurzG4b3ZNZbaqrTxVzdVDgEySDhEQTbbpVdCmfbPol/"><img src={facebook} alt="facebook" /> </a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; All Rights are reserved by AbroadHub.</p>
                </div>
        </footer>
    )
}