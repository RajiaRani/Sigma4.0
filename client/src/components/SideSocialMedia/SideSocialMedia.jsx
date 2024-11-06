import whatsapp from "../../assets/IMAGES/SocialMedia/whatsapp.png";
import { FcCallback } from "react-icons/fc";
import "./SideSocialMedia.css";
import { Button } from "@mui/material";

export default function SideSocialMedia(){

    return (
        <>
        <div className="side-social">
        <ul>
        <li><Button><a href="https://wa.me/9121382805"><img src={whatsapp} alt="whatsapp" /></a></Button></li>
        </ul>
        </div>
        </>
    )
}