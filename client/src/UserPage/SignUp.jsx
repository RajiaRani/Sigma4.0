import Footer from "../components/FOOTER/Footer";
import Navbar from "../components/NAVBAR/Navbar";
import "./SignUp.css";
import userpage from "../assets/IMAGES/AllLogos/user-page.jpg";
import logo from "../assets/IMAGES/AllLogos/small-logo-transparent.png";

export default function SignUp() {
    return (
        <>
            <div>
                <Navbar />
                <div className="main-container">
                    <h2>Sign Up To AbroadHub </h2>
                    <div className="bg-image">
                        {/* <img src={ userpage} alt="user-page" /> */}
                        <img src={logo} alt="logo" className="logo-image" />

                        <div className="user-form row">
                            <div className="col col-sm-12 col-md-6">
                                <input type="email" placeholder="Email ID" className="form-input" />
                                <input type="password" placeholder="Password" className="form-input" />
                                <input type="text" placeholder="Name" className="form-input" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}