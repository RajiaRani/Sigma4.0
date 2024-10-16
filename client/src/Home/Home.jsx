import "./Home.css"
import "../App.css"
import { RiSearchLine } from "react-icons/ri"
export default function Home() {
    return (
        <>
            <div className="home-page">
                <div className="search-btn">
                    <div className="search-input">
                        <p>
                            Talk to our Experts Free.....
                        </p>
                    </div>
                    <button className="search-button"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform" >Book Free Appointment</a></button>
                </div>
                <div className="home-bg-image">
                    <video autoPlay muted loop playsInline className="home-bg-video">
                        <source src="/video/uni-vedio1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="tag-line">
                        <h1>AbroadHub </h1>
                        <p>Connecting Dreams to Destinations</p>
                    </div>
                </div>
            </div>
        </>
    );
};