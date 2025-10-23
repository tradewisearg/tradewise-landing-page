import React, { useState, useEffect } from 'react';

const Offer = () => {
    const [videoPlaying, setVideoPlaying] = useState(false);

    const toggleVideo = () => {
        setVideoPlaying(!videoPlaying);
        const videoElement = document.getElementById('presentation-video');
        if (videoElement) {
            videoPlaying ? videoElement.pause() : videoElement.play();
        }
    };

    return (
        <section className="section hero-section">
            <div className="content-wrapper">
                <h1 className="hero-title">Lista Exclusiva de Proveedores PREMIUM</h1>
                <p className="hero-subtitle">Dejamos de ser intermediarios para ayudarte a evitar demoras y márgenes de ganancia bajos. Encontrá contactos directos y verificá el stock al instante.</p>

                <div className="cta-action-area">

                    <a className="cta-button large" href="https://wa.me/+541123741241?text=¡Quiero%20la%20lista%20ahora!" >

                        <span className=".cta-text">
                            Comprar por
                        </span>

                        <span className="discount-highlight">
                            $700 USD
                        </span>

                        <span className="discount-highlight2">
                            $199 USD
                        </span>
                    </a>
                </div>

                <div className="video-presentation">
                    <div className="video-wrapper" onClick={toggleVideo}>

                        <video
                            id="presentation-video"
                            loop
                            poster="./img/fondo.jpg"
                            muted
                            playsInline
                        >
                            <source src="/videos/prov.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>

                        {!videoPlaying && (
                            <button className="play-button">
                                <span className="play-icon"></span>
                            </button>
                        )}
                    </div>
                    <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>Haz clic para ver un breve adelanto de la calidad.</p>
                </div>

                <div className="product-showcase">
                    <h2 style={{ marginBottom: '20px' }}>Lo que incluye la Lista de Proveedores</h2>
                    <div className="products-grid">
                        <div className="product-card">
                            <img src="/img/ropa.jpg" alt="Proveedores de Ropa y Calzado" />
                            <h3>Ropa y Calzado</h3>
                            <p>Prendas exclusivas directas en Argentina.</p>
                        </div>
                        <div className="product-card">
                            <img src="/img/tecno.jpg" alt="Proveedores de Tecnología y Gadgets" />
                            <h3>Tecnología y Gadgets</h3>
                            <p>Acceso a distribuidores mayoristas de electrónica.</p>
                        </div>
                        <div className="product-card">
                            <img src="/img/bazar.jpg" alt="Artículos para el Hogar" />
                            <h3>Artículos para el Hogar</h3>
                            <p>Fuentes verificadas de decoración, bazar y accesorios.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Offer;
