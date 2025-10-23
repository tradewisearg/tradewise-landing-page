import React from 'react';

const Terms = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-900 text-gray-300">
            <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-8 text-blue-400 border-b pb-4 border-gray-700">
                    Términos y Condiciones del Servicio
                </h1>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">1. Aceptación de los Términos</h2>
                <p className="mb-4 text-sm leading-relaxed">
                    Al acceder y utilizar "La Lista de Proveedores" (el "Producto") ofrecida por **TRADEWISE**, usted acepta estar legalmente obligado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, no utilice el Producto.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Licencia de Uso</h2>
                <p className="mb-4 text-sm leading-relaxed">
                    **Licencia Individual:** Al comprar el Producto, se le otorga una licencia de uso individual y no transferible. El contenido, incluidos los contactos de proveedores, es propiedad intelectual de TRADEWISE.
                </p>
                <p className="mb-4 text-sm leading-relaxed">
                    **Prohibición de Distribución:** Está estrictamente prohibido compartir, revender, redistribuir o duplicar el contenido del Producto, ya sea en formato digital, impreso o a través de cualquier medio. La violación de esta cláusula resultará en la revocación inmediata de su licencia de uso sin derecho a reembolso.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Garantía y Política de Reembolso</h2>
                <p className="mb-4 text-sm leading-relaxed">
                    El Producto está cubierto por una Garantía de Satisfacción de **7 días** a partir de la fecha de compra. Para ser elegible para un reembolso completo, debe demostrar que ha contactado al menos a 5 proveedores de la lista y que, a pesar de ello, la lista no le resultó útil para su objetivo comercial. Los reembolsos se procesarán dentro de los 15 días hábiles posteriores a la aprobación. (Consulte la sección de Garantía para más detalles.)
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Limitación de Responsabilidad</h2>
                <p className="mb-4 text-sm leading-relaxed">
                    TRADEWISE no se hace responsable por pérdidas o daños, directos o indirectos, que surjan del uso o la incapacidad de usar el Producto, incluyendo cualquier pérdida de beneficios, interrupción de negocios o daños resultantes de transacciones fallidas con proveedores.
                </p>
                
                <p className="mt-10 text-center text-sm font-bold text-yellow-500">
                    Fecha de vigencia: Octubre 2025.
                </p>
            </div>
        </div>
    );
};

export default Terms;
