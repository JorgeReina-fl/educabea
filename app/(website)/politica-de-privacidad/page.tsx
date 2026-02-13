export default function PoliticaPrivacidadPage() {
    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl legal-document">
                <h1 className="text-3xl lg:text-4xl text-primary mb-8 text-center font-bold">Política de Privacidad</h1>

                <div className="prose prose-lg text-text-main max-w-none text-justify">
                    <p>
                        Beatriz Olivares Castellanos te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación, interacción o contratación de servicios a través del sitio web educabea.es.
                    </p>

                    <h3>1. Responsable del Tratamiento</h3>
                    <p>
                        <strong>Titular:</strong> Beatriz Olivares Castellanos<br />
                        <strong>Domicilio:</strong> Elche (Alicante), España<br />
                        <strong>Correo electrónico:</strong> beatrizoc99@hotmail.com
                    </p>

                    <h3>2. Finalidad del tratamiento de los datos personales</h3>
                    <p>
                        Cuando te conectas al sitio web para mandar un correo al Titular, te suscribes a su boletín o realizas una contratación, estás facilitando información de carácter personal de la que el responsable es Beatriz Olivares Castellanos. Esta información puede incluir datos de carácter personal como pueden ser tu dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información.
                    </p>
                    <p>Las finalidades son:</p>
                    <ul>
                        <li><strong>Formularios de contacto:</strong> Responder a tus consultas, solicitudes o dudas.</li>
                        <li><strong>Suscripción a newsletter:</strong> Enviar boletines, promociones y ofertas especiales.</li>
                        <li><strong>Gestión de servicios:</strong> Para prestar los servicios contratados y la gestión administrativa, contable y fiscal.</li>
                    </ul>

                    <h3>3. Legitimación</h3>
                    <p>
                        La base legal para el tratamiento de tus datos es:
                    </p>
                    <ul>
                        <li>El consentimiento del interesado (al rellenar un formulario o suscribirse).</li>
                        <li>La ejecución de un contrato de servicios, en su caso.</li>
                        <li>El interés legítimo del Titular.</li>
                    </ul>

                    <h3>4. Destinatarios de los datos</h3>
                    <p>
                        Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. Sin embargo, para prestar servicios estrictamente necesarios para el desarrollo de la actividad, compartimos datos con los siguientes prestadores bajo sus correspondientes condiciones de privacidad:
                    </p>
                    <ul>
                        <li><strong>Hosting:</strong> Utilizamos servicios de alojamiento web seguros.</li>
                    </ul>

                    <h3>5. Derechos</h3>
                    <p>
                        Tienes derecho a obtener confirmación sobre si en educabea.es estamos tratando datos personales que te conciernan, o no. Tienes derecho a acceder a tus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios.
                    </p>
                    <p>
                        Para ejercer estos derechos, puedes enviar un correo electrónico a beatrizoc99@hotmail.com.
                    </p>

                    <p className="mt-8 text-sm text-gray-500">
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                    </p>
                </div>
            </div>
        </section>
    );
}
