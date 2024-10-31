import { Link } from "react-router-dom";
export default function University() {
    return (
        <>
            <div className="university">
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