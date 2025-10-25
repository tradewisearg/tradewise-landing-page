import React from "react";
import BackButton from "./Backbutton";

const FAQPage = () => {
    return (
        <div className="faq-page-section">

            <div className="faq-content">

                <BackButton />
                
                <h1 className="faq-title">Preguntas Frecuentes (FAQ)</h1>

                <div className="faq-list">

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Qué es TradeWise?
                        </h3>
                        <p className="faq-answer">
                            TradeWise es un equipo de ex revendedores que ofrece una lista verificada de proveedores, pensada para emprendedores que buscan comprar productos de calidad al mejor precio.
                        </p>
                    </section>

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Cuál es la misión de TradeWise?
                        </h3>
                        <p className="faq-answer">
                            Nuestra misión es generar futuro en emprendedores como vos, proporcionando acceso a una lista filtrada de proveedores PREMIUM.
                        </p>
                    </section>

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Qué incluye la lista de proveedores?
                        </h3>
                        <p className="faq-answer">
                            Incluye datos de contacto actualizados, rubros, ubicaciones, condiciones de venta y enlaces directos para comunicarte con cada proveedor. También ofrecemos tips y recomendaciones para negociar de forma segura.
                        </p>
                    </section>

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Cómo obtengo la lista de proveedores?
                        </h3>
                        <p className="faq-answer">
                            Podés acceder a la lista realizando una compra directa con nosotros mediante Whatsapp. Una vez confirmado el pago, recibirás automáticamente los PDF con la lista de proveedores.
                        </p>
                    </section>

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Cada cuánto se actualiza la lista?
                        </h3>
                        <p className="faq-answer">
                            La lista se actualiza cada mes para asegurar que los datos sigan siendo válidos y que los nuevos proveedores del mercado también estén disponibles para nuestros clientes.
                        </p>
                    </section>

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Qué métodos de pago aceptan?
                        </h3>
                        <p className="faq-answer">
                            Aceptamos pagos por Mercado Pago, transferencia bancaria y criptomonedas. Todos los pagos son procesados de forma segura.
                        </p>
                    </section>

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Hay alguna garantía de compra?
                        </h3>
                        <p className="faq-answer">
                            Si algún proveedor de la lista no responde o los datos estuvieran desactualizados, podés escribirnos dentro de los 7 días posteriores a la compra y te enviaremos una versión corregida sin costo.
                        </p>
                    </section>

                    <section className="faq-item">
                        <h3 className="faq-question">
                            <span className="faq-icon" role="img" aria-label="Pregunta">❓</span>
                            ¿Cómo puedo comunicarme si tengo dudas?
                        </h3>
                        <p className="faq-answer">
                            Podés escribirnos directamente por WhatsApp. Respondemos todas las consultas dentro de las 24 horas.
                        </p>
                    </section>

                </div>

            </div>

        </div>
    );
};

export default FAQPage;