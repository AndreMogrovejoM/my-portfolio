import React from 'react';
import './Footer.css';

export const Footer = ({nombre}) => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <h1>{nombre}</h1>
                <p>Based in Arequipa</p>
            </div>
            <div className="footer__contact">
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className="footer__sns">
                <div className="designBy">
                    Design by {nombre}.
                </div>
                <div className="sns__links">
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

            </div>
        </footer>
    )
}

export default Footer;