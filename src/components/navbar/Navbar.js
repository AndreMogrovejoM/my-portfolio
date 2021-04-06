//rafce
import React from 'react';
import './Navbar.css';

const Navbar = ({ isScrolling, nombre }) => {
    const backtotop = () => {
        window.scrollTo({top: 0, left:0, behavior: "smooth"});
    }
    return (
        <>
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar__logo" onClick={backtotop}>{nombre}</div>
            <div className="ssns__links">
            <a href="https://github.com/Skdiy" target="_blank" rel="noreferrer">
                <i className="fab fa-github github"></i>
            </a>
            <a href="https://www.facebook.com/andre.mogrovejomartinez" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook facebook"></i>
            </a>
            <a href="https://www.instagram.com/andremogrovejomartinez/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram instagram"></i>
            </a>
            </div>
        
        </nav>

        </>
    )
}

export default Navbar
