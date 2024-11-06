import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function Courses({ closeSubMenu}) {
    return (
        <>
            <div className="sub-menu">
                <RxCross2 className="close-icon" onClick={closeSubMenu} />
                
                <ul className="g-level2">
                    <li><Link to="#">CSE & Technology</Link></li>
                    <li><Link to="#">Business & Management</Link></li>
                    <li><Link to="#">Engineering</Link></li>
                    <li><Link to="#">Medicine & Healthcare</Link></li>
                    <li><Link to="#">Law</Link></li>
                    <li><Link to="#">Arts & Humanities</Link></li>
                    <li><Link to="#">Natural Sciences</Link></li>
                    <li><Link to="#">Social Sciences</Link></li>
                </ul>
            </div>
        </>
    );
}
