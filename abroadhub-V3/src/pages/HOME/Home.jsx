import "./Home.css"
import "../../styles/global.css";
import HomeButton from "../../components/HomeButton/index.jsx";
export default function Home() {
    return (
        <>
          <div className="main-container">
            <section className="section">
            <div className="home-page">
                <HomeButton/>
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
            </section>
          </div>
        </>
    );
};