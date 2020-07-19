import React from "react";
import './Logo.css';
import LogoIMG from './Logo.png';


function Logo() {

    return (
        <div className="logoClass">
            <img src={LogoIMG} alt=""/>
            <span> Booking</span>
        </div>
    );
}

export default Logo;