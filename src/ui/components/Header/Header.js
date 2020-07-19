import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";

function Header() {

    return (
        <div className="headerClass">
            <Logo/>
            <div className='buttonClass'>
                <button className='buttonClass-item'>ABOUT</button>
                <button className='buttonClass-item'>MY BOOKING</button>
                <button className='buttonClass-item'>SIGN IN</button>
            </div>
        </div>
    );
}

export default Header;
