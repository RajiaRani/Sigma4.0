import { RiSearchLine } from "react-icons/ri";
import "./index.css";
import Button from "@mui/material/Button";
export default function HomeButton(){
    return (
        <>
        <div className="search-btn d-flex aligh-items-center">
                    <div className="search-input">
                        <p>
                            Talk to our Experts Free.....
                        </p>
                    </div>
                    <Button className="search-button"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNHdmGrZCQWaXeODsJ6ASI49fd3iJ6hNR3CRBCsc_nfAYw/viewform" >Book Free Appointment</a></Button>
        </div>
        </>
    )
}