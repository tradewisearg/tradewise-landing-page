import React from 'react';

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-container">
                <a href="#home" className="header-logo">
                    TRADEWISE
                    <span className="logo-tagline"> | Proveedores Verificados</span>
                </a>

                <nav className="header-nav">
                    <a href="#faq" className="nav-link">FAQ</a>
                    <a href="#terminos" className="nav-link">Términos</a>
                </nav>

                <a 
                    href="#cta-final"
                    className="header-cta-button"
                >
                    Acceso Inmediato
                </a>
            </div>
        </header>
    );
};

export default Header;