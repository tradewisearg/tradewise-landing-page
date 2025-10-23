import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);

    const difference = midnight.getTime() - now.getTime();
    
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutos: Math.floor((difference / 1000 / 60) % 60),
            segundos: Math.floor((difference / 1000) % 60)
        };
    } else {
        timeLeft = { horas: 0, minutos: 0, segundos: 0 };
    }

    const pad = (num) => (num < 10 ? '0' + num : num);

    return {
        horas: pad(timeLeft.horas),
        minutos: pad(timeLeft.minutos),
        segundos: pad(timeLeft.segundos),
        expired: difference <= 0
    };
};

const FloatingTimer = () => {
    const [time, setTime] = useState(calculateTimeLeft());
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        const timer = setTimeout(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        // Limpieza
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [time]);
    
    if (time.expired) {
        return null; 
    }

    return (
        <div className={`floating-timer-bar ${isVisible ? 'is-visible' : ''}`}>
            <div className="timer-content">
                <span className="timer-text">🔥 50% OFF - ¡TERMINA HOY!</span>
                <div className="timer-display">
                    <span className="time-value">{time.horas}h</span>
                    <span className="time-separator">:</span>
                    <span className="time-value">{time.minutos}m</span>
                    <span className="time-separator">:</span>
                    <span className="time-value">{time.segundos}s</span>
                </div>
            </div>
        </div>
    );
};

export default FloatingTimer;
