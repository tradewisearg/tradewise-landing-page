import React, { useState, useRef, useEffect } from 'react';

const testimonialData = [
    { id: 1, text: "Dejé de perder tiempo y mis costos bajaron un montón. Ahora puedo competir con más calidad.", name: "Martín L. | Buenos Aires" },
    { id: 2, text: "La inversión se recuperó en el primer mes. Los contactos son directos y con precios inigualables.", name: "Sofía M. | Córdoba" },
    { id: 3, text: "Al principio dudé, pero una vez que la tuve vi que no era humo. Los proveedores ya trabajan con revendedores.", name: "Yamila P. | Rosario" },
    { id: 4, text: "La lista es oro puro. Proveedores verificados y precios de locura. Gracias!", name: "Andrés G. | Mendoza" },
    { id: 5, text: "Una herramienta imprescindible para cualquier persona que quiera empezar a importar en serio.", name: "Florencia K. | Santa Fe" },
    { id: 6, text: "Nunca había comprado algo así y tenía miedo. Con esta lista ya hice tres compras sin drama.", name: "Patricio R. | Mar del Plata" },
    { id: 7, text: "Lo mejor es que pude reinvertir más rápido porque el margen dio desde el primer lote.", name: "Damián C. | Río Negro" },
    { id: 8, text: "La lista no sólo sirve para comprar, sirve para entender cómo se mueve el negocio.", name: "Lautaro V. | Tucumán" },
    { id: 9, text: "Lo que más me sirvió fue que no pierdo tiempo probando proveedores truchos.", name: "Carolina F. | Neuquén" },
    { id: 10, text: "Me ahorré meses de prueba y error. Vale cada peso si querés arrancar rápido.", name: "Benjamín A. | Salta" },
    { id: 11, text: "Yo ya vendía, pero pude mejorar el margen porque dejé de comprar a intermediarios.", name: "Lucas M. | La Plata" },
    { id: 12, text: "En mi caso la usé para revender en Marketplace. Se vende solo cuando tenés buen costo.", name: "Miguel E. | Chaco" },
    { id: 13, text: "No pensé que iba a ser tan directa. Entrás, escribís y te atienden. Fin.", name: "Ignacio T. | Misiones" },
    { id: 14, text: "Me sirvió para arrancar sin experiencia. Después vas agarrando ritmo solo.", name: "Emanuel S. | Entre Ríos" },
];

const StarRating = () => (
    <div className="star-rating-svg">
        <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27l4.15 2.53c.42.26.96.06 1.12-.39l-.8-4.7L20.5 10.88c.34-.3.1-.88-.34-.95l-4.75-.41L12.55 5.2c-.18-.36-.68-.36-.86 0L9.59 9.52l-4.75.41c-.44.07-.68.65-.34.95l3.62 3.16-.8 4.7c-.16.45.33.65.75.39L12 17.27z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27l4.15 2.53c.42.26.96.06 1.12-.39l-.8-4.7L20.5 10.88c.34-.3.1-.88-.34-.95l-4.75-.41L12.55 5.2c-.18-.36-.68-.36-.86 0L9.59 9.52l-4.75.41c-.44.07-.68.65-.34.95l3.62 3.16-.8 4.7c-.16.45.33.65.75.39L12 17.27z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27l4.15 2.53c.42.26.96.06 1.12-.39l-.8-4.7L20.5 10.88c.34-.3.1-.88-.34-.95l-4.75-.41L12.55 5.2c-.18-.36-.68-.36-.86 0L9.59 9.52l-4.75.41c-.44.07-.68.65-.34.95l3.62 3.16-.8 4.7c-.16.45.33.65.75.39L12 17.27z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27l4.15 2.53c.42.26.96.06 1.12-.39l-.8-4.7L20.5 10.88c.34-.3.1-.88-.34-.95l-4.75-.41L12.55 5.2c-.18-.36-.68-.36-.86 0L9.59 9.52l-4.75.41c-.44.07-.68.65-.34.95l3.62 3.16-.8 4.7c-.16.45.33.65.75.39L12 17.27z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27l4.15 2.53c.42.26.96.06 1.12-.39l-.8-4.7L20.5 10.88c.34-.3.1-.88-.34-.95l-4.75-.41L12.55 5.2c-.18-.36-.68-.36-.86 0L9.59 9.52l-4.75.41c-.44.07-.68.65-.34.95l3.62 3.16-.8 4.7c-.16.45.33.65.75.39L12 17.27z" />
        </svg>
    </div>
);

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselContainerRef = useRef(null);

    useEffect(() => {
        const container = carouselContainerRef.current;
        const activeCard = container?.children[activeIndex];

        if (activeCard && container) {

            const cardRect = activeCard.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const relativeLeft = cardRect.left - containerRect.left;
            const newScrollLeft = container.scrollLeft + relativeLeft + (activeCard.offsetWidth / 2) - (container.clientWidth / 2);

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }

        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % testimonialData.length);
        }, 3000);

        return () => clearInterval(interval);

    }, [activeIndex]);

    return (
        <section className="testimonials-carousel">
            <h2>Testimonios de Clientes Satisfechos</h2>
            <div className="carousel-container" ref={carouselContainerRef}>
                {testimonialData.map((card, index) => (
                    <div
                        key={card.id}
                        className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                    >
                        <StarRating />
                        <p className="testimonial-text">"{card.text}"</p>
                        <p className="testimonial-author">- {card.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;

