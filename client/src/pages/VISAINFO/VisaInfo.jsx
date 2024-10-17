import "./VisaInfo.css"
import "../../styles/global.css";
import immigration from "../../assets/IMAGES/VisaInfo/immgiration.jpg"
import tick from "../../assets/IMAGES/VisaInfo/tick.png"
export default function Home() {
    return (
        <>
            <div className="main-container">
                <section className="section">
                    <div className="immigration-container">
                        <div className="image-text">
                            <h1>Your One Stop Solution</h1>
                            <h2>All Your Need is AbroadHub</h2>
                            <p>Studying at a foreign university is a dream for many students. We help make that dream a reality.
                                The process of choosing and applying for the best university for your chosen field of study can seem overwhelming.</p>

                            <ul className="visa-points">
                                <li><img src={tick} /> <p>Turn your dream of studying abroad into reality with AbroadHub.</p></li>
                                <li><img src={tick} /><p> We connect you to top universities worldwide, guiding you every step of the way.</p></li>
                                <li><img src={tick} /><p> From university selection to visa assistance, AbroadHub makes your journey seamless and stress-free.</p></li>

                            </ul>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform" className="btn visainfo">Contact Us</a>
                        </div>

                        <div className="image">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform" className="top">Book Free Appointment</a>
                            <img src={immigration} />
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform" className="bottom">Apply Now</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}