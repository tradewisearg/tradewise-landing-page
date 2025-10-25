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
                <p className="hero-subtitle">Deja de perder tiempo con proveedores falsos. Accede a nuestra lista verificada. <strong>Encontrá contactos directos y verificá el stock al instante.</strong></p>

                <div className="cta-action-area">

                    <a className="cta-button large"
                        href="https://wa.me/+541123612504?text=¡Quiero%20la%20lista%20ahora!"
                        target="_blank"
                        rel="noopener noreferrer" >

                        <span className="cta-text">
                            Accedé a la lista completa por solo
                        </span>

                        <span className="discount-highlight">
                            $199 USD
                        </span>
                    </a>
                </div>

                <div className="video-presentation">
                    <div className="video-wrapper" onClick={toggleVideo}>

                        <video
                            id="presentation-video"
                            loop
                            poster="./img/fondo.png"
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
                    <p className="video-description">Haz clic para ver un breve adelanto de la calidad.</p>
                </div>

                <div className="product-showcase">
                    <h2 style={{ marginBottom: '20px' }}>Algunas de las categorías</h2>
                    <div className="products-grid">
                        <div className="product-card">
                            <img src="/img/ropa.png" alt="Proveedores de Ropa y Calzado" />
                            <h3>Ropa y Calzado</h3>
                            <p>Prendas exclusivas directas en Argentina.</p>
                        </div>
                        <div className="product-card">
                            <img src="/img/tecno.png" alt="Proveedores de Tecnología y Gadgets" />
                            <h3>Tecnología y Gadgets</h3>
                            <p>Acceso a distribuidores mayoristas de electrónica.</p>
                        </div>
                        <div className="product-card">
                            <img src="/img/bazar.png" alt="Artículos para el Hogar" />
                            <h3>Artículos para el Hogar</h3>
                            <p>Fuentes verificadas de decoración, bazar y accesorios.</p>
                        </div>
                    </div>

                    <div className="logo-marquee-wrapper">
                        <div className="logo-marquee">
                            <img src="/logos/samsung.png" alt="SAMSUNG" className="logo-image logo-samsung" />
                            <img src="/logos/apple.png" alt="APPLE" className="logo-image logo-filter" />
                            <img src="/logos/xiaomi.png" alt="XIAOMI" className="logo-image" />
                            <img src="/logos/lataffa.png" alt="LATAFFA" className="logo-image" />
                            <img src="/logos/ps5.png" alt="PS5" className="logo-image logo-adjust-height" />
                            <img src="/logos/vs.png" alt="VS" className="logo-image logo-adjust-height" />
                            <img src="/logos/karsell.png" alt="KARSELL" className="logo-image logo-filter" />

                            <img src="/logos/samsung.png" alt="SAMSUNG" className="logo-image logo-samsung" />
                            <img src="/logos/apple.png" alt="APPLE" className="logo-image logo-filter" />
                            <img src="/logos/xiaomi.png" alt="XIAOMI" className="logo-image" />
                            <img src="/logos/lataffa.png" alt="LATAFFA" className="logo-image" />
                            <img src="/logos/ps5.png" alt="PS5" className="logo-image logo-adjust-height" />
                            <img src="/logos/vs.png" alt="VS" className="logo-image logo-adjust-height" />
                            <img src="/logos/karsell.png" alt="KARSELL" className="logo-image logo-filter" />

                            <img src="/logos/samsung.png" alt="SAMSUNG" className="logo-image logo-samsung" />
                            <img src="/logos/apple.png" alt="APPLE" className="logo-image logo-filter" />
                            <img src="/logos/xiaomi.png" alt="XIAOMI" className="logo-image" />
                            <img src="/logos/lataffa.png" alt="LATAFFA" className="logo-image" />
                            <img src="/logos/ps5.png" alt="PS5" className="logo-image logo-adjust-height" />
                            <img src="/logos/vs.png" alt="VS" className="logo-image logo-adjust-height" />
                            <img src="/logos/karsell.png" alt="KARSELL" className="logo-image logo-filter" />

                            <img src="/logos/samsung.png" alt="SAMSUNG" className="logo-image logo-samsung" />
                            <img src="/logos/apple.png" alt="APPLE" className="logo-image logo-filter" />
                            <img src="/logos/xiaomi.png" alt="XIAOMI" className="logo-image" />
                            <img src="/logos/lataffa.png" alt="LATAFFA" className="logo-image" />
                            <img src="/logos/ps5.png" alt="PS5" className="logo-image logo-adjust-height" />
                            <img src="/logos/vs.png" alt="VS" className="logo-image logo-adjust-height" />
                            <img src="/logos/karsell.png" alt="KARSELL" className="logo-image logo-filter" />

                            <img src="/logos/samsung.png" alt="SAMSUNG" className="logo-image logo-samsung" />
                            <img src="/logos/apple.png" alt="APPLE" className="logo-image logo-filter" />
                            <img src="/logos/xiaomi.png" alt="XIAOMI" className="logo-image" />
                            <img src="/logos/lataffa.png" alt="LATAFFA" className="logo-image" />
                            <img src="/logos/ps5.png" alt="PS5" className="logo-image logo-adjust-height" />
                            <img src="/logos/vs.png" alt="VS" className="logo-image logo-adjust-height" />
                            <img src="/logos/karsell.png" alt="KARSELL" className="logo-image logo-filter" />

                            <img src="/logos/samsung.png" alt="SAMSUNG" className="logo-image logo-samsung" />
                            <img src="/logos/apple.png" alt="APPLE" className="logo-image logo-filter" />
                            <img src="/logos/xiaomi.png" alt="XIAOMI" className="logo-image" />
                            <img src="/logos/lataffa.png" alt="LATAFFA" className="logo-image" />
                            <img src="/logos/ps5.png" alt="PS5" className="logo-image logo-adjust-height" />
                            <img src="/logos/vs.png" alt="VS" className="logo-image logo-adjust-height" />
                            <img src="/logos/karsell.png" alt="KARSELL" className="logo-image logo-filter" />

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Offer;
