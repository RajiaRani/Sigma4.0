import { Link } from "react-router-dom";
export default function Exams() {
    return (
        <>
            <div className="exams">
                <ul className="g-level2">
                    <li><Link to="#">IELTS </Link></li>
                    <li><Link to="#">TOEFL  </Link></li>
                    <li><Link to="#"> DET </Link></li>
                    <li><Link to="#"> PET </Link></li>
                    <li><Link to="#">GRE </Link></li>
                    <li><Link to="#">GMAT </Link></li>
                    <li><Link to="#">SAT </Link></li>
                </ul>
            </div>
        </>
    )
}