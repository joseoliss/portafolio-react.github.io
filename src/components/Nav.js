import React, { useState, StrictMode } from 'react'
import './Nav.css';
import { Link } from 'wouter'

function Nav() {
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show, true)
    }

    return (
        <StrictMode>
            <div
                className="menu-btn"
                id="menu-btn"
                onClick={toggleShow}
            >
                <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className="Contenedor">
                <nav className="Navigation">
                    <ul className={show ? "nav-ul" : "nav-ulShow"}>
                        <li><Link href="/">Sobre mi</Link></li>
                        <li><Link href="/Conocimientos">Conocimientos</Link></li>
                        <li><Link href="/Proyectos">Proyectos</Link></li>
                    </ul>
                </nav>
            </div>
        </StrictMode>
    );

}

export default Nav;

