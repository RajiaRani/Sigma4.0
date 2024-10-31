import { Link } from "react-router-dom";
export default function Loan() {
    return (
        <>
            <div className="loan">
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