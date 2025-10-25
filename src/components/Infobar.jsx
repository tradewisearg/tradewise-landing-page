import React from 'react';

const Infobar = () => {
    return (
        <div className="vertical-infobar">
            
            <div className="infobar-item trust">
                <span role="img" aria-label="Estrella">⭐</span>
                <p>4.9/5 Estrellas</p>
                <p className="small-text">30+ reseñas</p>
            </div>
            <a href="#cta-final" className="infobar-item cta-link">
                <span role="img" aria-label="Fuego">🔥</span>
                <p>Últimas Horas</p>
                <p className="small-text">50% de descuento</p>
            </a>

            <a href="#guarantee" className="infobar-item benefit-link">
                <span role="img" aria-label="Seguro">✅</span>
                <p>Garantía de 7 Días</p>
                <p className="small-text">Sin Riesgos</p>
            </a>
            <a href="#faq" className="infobar-item faq-link">
                <span role="img" aria-label="Pregunta">❓</span>
                <p>¿Dudas?</p>
                <p className="small-text">Visita la sección FAQ</p>
            </a>
            
        </div>
    );
};

export default Infobar;