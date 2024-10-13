import "./Services.css"
import student from "../assets/services/student.png";
import college from "../assets/services/school.png";
import shortlist from "../assets/services/clipboard-list-check.png";
import guide from "../assets/services/teaching.png";
import track from "../assets/services/tracking.png";
import loan from "../assets/services/loan.png";
import visa from "../assets/services/call-center.png";
import travel from "../assets/services/travel.png";
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

export default function Services(){
    return(
        <>
         <div className="services">
            <h1>From Start to Finish</h1>
            <h2>Our Services for Your International Education</h2>
            <div className="services-info-container">
                {services.map(service => (
                    <div key={service.title} className="services-info">
                        <img src={service.img} alt={service.title} />
                        <h3>{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}