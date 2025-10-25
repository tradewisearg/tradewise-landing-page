import React from 'react';

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-container">
                <a href="#home" className="header-logo">
                    TRADEWISE
                    <span className="logo-tagline"> | Proveedores Verificados</span>
                </a>

                <a
                    href="https://wa.me/5491123612504?text=Hola,%20quiero%20el%20acceso%20inmediato!"
                    className="header-cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acceso Inmediato"
                >
                    Acceso Inmediato
                </a>
            </div>
        </header>
    );
};

export default Header;