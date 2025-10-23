import React from 'react';

const faqLink = "#faq";

const FAQIcon = () => {
    return (
        <a
            href={faqLink}
            className="faq-float-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Preguntas Frecuentes (FAQ)"
        >
            <div className="faq-icon-wrapper">
                <span className="faq-text">FAQ</span>
            </div>
        </a>
    );
}

export default FAQIcon;