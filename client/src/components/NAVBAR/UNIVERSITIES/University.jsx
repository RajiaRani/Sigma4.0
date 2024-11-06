import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function University({closeSubMenu}) {
    return (
        <>
            <div className="sub-menu">
            <RxCross2 className="close-icon" onClick={closeSubMenu} />
                <ul className="g-level2">
                    <li><Link to="#">MS University </Link></li>
                    <li><Link to="#">MBA  </Link></li>
                    <li><Link to="#">BE/BTech </Link></li>
                    <li><Link to="#"> NEng </Link></li>
                    <li><Link to="#"> MIM </Link></li>
                    <li><Link to="#"> BBA </Link></li>
                    <li><Link to="#"> CSE</Link></li>

                </ul>
            </div>
        </>
    )
}