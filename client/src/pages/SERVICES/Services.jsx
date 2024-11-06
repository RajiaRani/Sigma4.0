import "./Services.css";
import "../../styles/global.css";
import student from "../../assets/IMAGES/services/student.png";
import college from "../../assets/IMAGES/services/school.png";
import shortlist from "../../assets/IMAGES/services/clipboard-list-check.png";
import guide from "../../assets/IMAGES/services/teaching.png";
import track from "../../assets/IMAGES/services/tracking.png";
import loan from "../../assets/IMAGES/services/loan.png";
import visa from "../../assets/IMAGES/services/call-center.png";
import travel from "../../assets/IMAGES/services/travel.png";
const services = [
    { img: student, title: "Profile Assessment" },
    { img: college, title: "Shortlist Universities" },
    { img: guide, title: "Guidance in Your Exams" },
    { img: shortlist, title: "Apply to Shortlisted Universities " },
    { img: track, title: "Track Application" },
    { img: loan, title: "Process Your Educational Loans" },
    { img: visa, title: "Visa Assistance" },
    { img: travel, title: "Travel Assistance" }
];

export default function Services() {
    return (
        <>
            <div className="main-container">
                <section className="section">
                    <div className="services">
                        <h1>From Start to Finish</h1>
                        <h2>Our Services for Your International Education</h2>
                        <div className="services-info-container">
                            {services.map(service => (
                                <div key={service.title} className="services-info">
                                    <img src={service.img} alt={service.title} />
                                    <h3 className="mt-2">{service.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}