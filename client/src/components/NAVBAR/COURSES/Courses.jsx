import { Link } from "react-router-dom";
export default function Courses() {
    return (
        <>
            <div className="courses">
                <ul className="g-level2">
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
        </>
    )
}