import React from 'react';

const BackButton = () => {
    
    const handleGoBack = () => {
        window.location.hash = ''; 
    };

    return (
        <button 
            onClick={handleGoBack} 
            className="back-button"
            aria-label="Volver a la página principal"
        >
            &larr; Volver
        </button>
    );
};

export default BackButton;