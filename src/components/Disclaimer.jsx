import React from 'react';
import BackButton from './Backbutton';


const Disclaimer = () => {
    return (
        <div className="legal-page-section">
            <div className="legal-content">

                <BackButton />
                
                <h1>Aviso Legal y Política de Privacidad</h1>
                
                <h2>Política de Privacidad</h2>
                <p>
                    En <strong>TRADEWISE</strong>, nos tomamos muy en serio tu privacidad. Al realizar una compra, recopilamos la siguiente información estrictamente necesaria: nombre, correo electrónico y medio de pago. Esta información se utiliza exclusivamente para procesar tu pedido, garantizar la entrega del producto y, ocasionalmente, enviarte información relevante sobre actualizaciones de la lista o servicios relacionados. **Nunca compartiremos, venderemos o alquilaremos tu información personal a terceros**. Utilizamos plataformas de pago seguras para el procesamiento de transacciones.
                </p>

                <h2>Descargo de Responsabilidad sobre Ganancias y Resultados</h2>
                <p>
                    La compra de "La Lista de Proveedores" le proporciona acceso a información de contacto de mayoristas y recursos educativos para importadores. <strong>TRADEWISE no garantiza ningún nivel específico de éxito o ingresos a través del uso de esta lista</strong>.
                </p>

                <p>
                    Cualquier declaración sobre ganancias o ejemplos de ingresos son solo estimaciones de lo que puede ser posible. Su éxito depende de factores fuera de nuestro control, como, pero no limitado a: su habilidad comercial, el esfuerzo que invierta, las condiciones económicas del mercado, la elección de productos, y su capacidad para establecer relaciones con los proveedores.
                </p>
                <p>
                    <strong>Usted acepta que TRADEWISE no es responsable del éxito o fracaso de sus decisiones comerciales</strong> relacionadas con cualquier información presentada en este producto. Usted asume toda la responsabilidad por sus propias acciones y resultados en su negocio.
                </p>
                
                <h2>Uso de Proveedores</h2>
                <p>
                    Los contactos proporcionados han sido verificados por nuestro equipo. Sin embargo, <strong>TRADEWISE no es el proveedor y no tiene control sobre las políticas de precios, existencias o envíos de terceros</strong>. Cualquier transacción, acuerdo o disputa que tenga con un proveedor incluido en la lista es únicamente entre usted y dicho proveedor.
                </p>
                
                <p>
                    Última actualización: Octubre 2025.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
