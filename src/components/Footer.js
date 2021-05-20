import React, { StrictMode } from 'react'
import './Footer.css'
import logo from '../img/LOGO.png'

function Footer() {
    return (
        <StrictMode>
            <footer className="footer">
                <section className="social footer">
                    <div className="links">
                        <a href="https://github.com/joseoliss" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jose-andres-solis-camacho-027816199/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/50686452426" target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="mailto:joseoliss97@gmail.com" target="_blank" rel="noreferrer">
                            <i className="far fa-envelope"></i>
                        </a>
                    </div>
                </section>
                <h3>Joseoliss <img src={logo} alt="logo" className="logo"></img> Copyright</h3>
            </footer>
        </StrictMode>
    )
}

export default Footer;