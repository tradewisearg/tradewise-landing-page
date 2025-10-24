import React from 'react';

const LockIcon = () => (
    <svg className="badge-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 10h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V7c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v3z" />
    </svg>
);

const RefundIcon = () => (
    <svg className="badge-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
);

const StarIcon = () => (
    <svg className="badge-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);


const Guarantee = () => {
    return (
        <section className="section guarantee-section">
            <div className="content-wrapper">


                <div className="guarantee-box">
                    <div className="guarantee-details">
                        <h2 className="section-title">Garantía de Confianza</h2>
                        <p className="guarantee-text">
                            Si en la primera semana la lista no cumple con lo prometido y no encuentras proveedores útiles para tu negocio, te devolvemos el 100% de tu inversión.
                        </p>
                    </div>
                    <div className="trust-badges-grid">
                        <div className="badge-item">
                            <LockIcon />
                            <span>Pago 100% Seguro</span>
                        </div>
                        <div className="badge-item">
                            <RefundIcon />
                            <span>Devolución</span>
                        </div>
                        <div className="badge-item">
                            <StarIcon />
                            <span>Proveedores Verificados</span>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    );
};

export default Guarantee;
