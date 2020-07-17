import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";

function Header() {
    const name = <span style={{
        color: 'red',
        fontSize: '56px'
    }}>Игорь</span>;

    const age = (currentYear, userYear) => {
        const currentAge = currentYear - userYear;
        if (currentAge < 20) {
            return <span style={{color: 'red'}}>{currentAge}</span>;
        } else {
            return <span style={{color: 'green'}}>{currentAge}</span>;
        }

    }

    return <header className="headerClass">
        <Logo />
        Привет {name}
        <p style={{color:'red'}}>Твой возраст: {age(2020, 1990)}</p>
        <p style={{color:'green'}}>Возраст вашего кота: {age(2020, 2014)}</p>
    </header>
}

export default Header;
