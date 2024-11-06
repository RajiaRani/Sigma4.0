import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function Exams({ closeSubMenu}) {
    return (
        <>
            <div className="sub-menu">
                 <RxCross2 className="close-icon" onClick={closeSubMenu} />
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