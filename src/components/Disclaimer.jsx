import React from 'react';

const Disclaimer = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-900 text-gray-300">
            <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-8 text-blue-400 border-b pb-4 border-gray-700">
                    Aviso Legal y Política de Privacidad
                </h1>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">Política de Privacidad</h2>
                <p className="mb-4 text-sm leading-relaxed">
                    En **TRADEWISE** (creadores de "La Lista de Proveedores"), nos tomamos muy en serio tu privacidad. Al realizar una compra, recopilamos la siguiente información estrictamente necesaria: nombre, correo electrónico y datos de pago. Esta información se utiliza exclusivamente para procesar tu pedido, garantizar la entrega del producto y, ocasionalmente, enviarte información relevante sobre actualizaciones de la lista o servicios relacionados. **Nunca compartiremos, venderemos o alquilaremos tu información personal a terceros**. Utilizamos plataformas de pago seguras para el procesamiento de transacciones.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Descargo de Responsabilidad sobre Ganancias y Resultados</h2>
                <p className="mb-4 text-sm leading-relaxed">
                    La compra de "La Lista de Proveedores" le proporciona acceso a información de contacto de mayoristas y recursos educativos para importadores. **TRADEWISE no garantiza ningún nivel específico de éxito o ingresos a través del uso de esta lista**.
                </p>
                <p className="mb-4 text-sm leading-relaxed">
                    Cualquier declaración sobre ganancias o ejemplos de ingresos son solo estimaciones de lo que puede ser posible. Su éxito depende de factores fuera de nuestro control, como, pero no limitado a: su habilidad comercial, el esfuerzo que invierta, las condiciones económicas del mercado, la elección de productos, y su capacidad para establecer relaciones con los proveedores.
                </p>
                <p className="mb-4 text-sm leading-relaxed font-bold text-red-400">
                    **Usted acepta que TRADEWISE no es responsable del éxito o fracaso de sus decisiones comerciales** relacionadas con cualquier información presentada en este producto. Usted asume toda la responsabilidad por sus propias acciones y resultados en su negocio.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Uso de Proveedores</h2>
                <p className="mb-4 text-sm leading-relaxed">
                    Los contactos proporcionados han sido verificados por nuestro equipo. Sin embargo, **TRADEWISE no es el proveedor y no tiene control sobre las políticas de precios, existencias o envíos de terceros**. Cualquier transacción, acuerdo o disputa que tenga con un proveedor incluido en la lista es únicamente entre usted y dicho proveedor.
                </p>
                
                <p className="mt-10 text-center text-sm font-bold text-yellow-500">
                    Última actualización: Octubre 2025.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
