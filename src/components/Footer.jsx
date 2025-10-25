import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content-wrapper">

                <div className="payment-methods">
                    <h3>Métodos de Pago Aceptados</h3>
                    <img
                        src="/img/payment.png"
                        alt="Tarjetas de Crédito, Mercado Pago y Crypto aceptadas"
                        className="payment-icons-strip"
                    />
                </div>

                <div className="legal-links">
                    <a href="#terminos" className="footer-link">Términos y Condiciones</a>
                    <span className="separator">|</span>
                    <a href="#privacidad" className="footer-link">Política de Privacidad</a>

                </div>

                <div>
                    <p className="copyright-text">
                        &copy; {new Date().getFullYear()} TRADEWISE. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;