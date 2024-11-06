import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function Loan({closeSubMenu}) {
    return (
        <>
            <div className="sub-menu">
            <RxCross2 className="close-icon" onClick={closeSubMenu} />
                <ul className="g-level2">
                    <li><Link to="#">Student Loan</Link></li>
                    <li><Link to="#">Loan Eligibility </Link></li>
                    <li><Link to="#">Interest Rate </Link></li>
                    <li><Link to="#">Repayment Options </Link></li>
                    <li><Link to="#"> </Link></li>
                    <li><Link to="#"> </Link></li>

                </ul>
            </div>
        </>
    )
}