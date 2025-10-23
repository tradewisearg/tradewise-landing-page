import React from 'react';

const LogoStrip = () => {
    return (
        <section className="logo-strip">
            <p>Trabajamos con las mejores marcas del mercado:</p>
            <div className="logo-grid">
                <img 
                    src="/logos/samsung.png" 
                    alt="SAMSUNG" 
                    className="logo-image logo-samsung" 
                />
                <img 
                    src="/logos/apple.png" 
                    alt="APPLE" 
                    className="logo-image" 
                />
                <img 
                    src="/logos/xiaomi.png" 
                    alt="XIAOMI" 
                    className="logo-image" 
                />
                <img 
                    src="/logos/lataffa.png" 
                    alt="LATAFFA" 
                    className="logo-image" 
                />
            </div>
        </section>
    );
};

export default LogoStrip;