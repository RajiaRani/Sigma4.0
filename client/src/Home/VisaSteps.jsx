import "./VisaSteps.css"
import school from "../assets/visasteps/school.png"
import visa from "../assets/visasteps/visa1.png"
import list from "../assets/visasteps/list1.png"
import takeoff from "../assets/visasteps/take-off1.png"
import { useInView } from "react-intersection-observer"

export default function VisaSteps() {

    const AnimatedSection = ({ children, className }) => {
        const { ref, inView } = useInView({
            triggerOnce: false,  // This ensures the animation triggers every time it comes into view
            threshold: 0.1,
        });

        return (
            <div
                ref={ref}
                className={`${className} ${inView ? 'show' : ''}`}
            >
                {children}
            </div>
        );
    };

    return (
        <>
            <div className="visa-steps-container">
                <h1>Four Simple Steps Between <span className="highlight">You & Your Dream</span></h1>
                <div className="visa-steps">
                    <AnimatedSection className="from-left">
                        <div className="step1">
                            <div className="step-info step-info1">
                                <img src={list} alt="list-image" />
                                <h2>1) Shortlist and apply for Universities</h2>
                                <p>
                                    Start by creating your profile on our platform.
                                    Our cutting-edge platform will suggest Universities unique to your needs.
                                    Shortlist your preferred Universities and start applying. You can apply to up to six universities in one go.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="from-right">
                        <div className="step2">
                            <div className="step-info step-info2">
                                <img src={school} alt="university-image" />
                                <h2>2) Get Acceptance from Universities</h2>
                                <p>
                                    The University will review your application and if accepted,
                                    you will be getting your Letter Of Acceptance from the University.
                                    You've crossed the halfway mark now in your study abroad journey.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="from-top">
                        <div className="step3">
                            <div className="step-info step-info3">
                                <img src={visa} alt="visa-image" />
                                <h2>3) Apply For Visa</h2>
                                <p>
                                    Our Overseas Education Consultants will help you throughout your
                                    Visa application process, interview and ensure your application is error-free and you have a higher
                                    chance of getting a Visa.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="from-bottom">
                        <div className="step4">
                            <div className="step-info step-info4">
                                <img src={takeoff} alt="takeoff-image" />
                                <h2>4) Start Your Study Abroad Journey</h2>
                                <p>
                                    Now the hard part is over. All that's left is just booking a
                                    flight ticket and starting your journey. Our Consultants can answer any
                                    last-minute queries you may have regarding the travel. Our Value Added Services
                                    will ensure your relocation is hassle-free.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </>
    );
}
