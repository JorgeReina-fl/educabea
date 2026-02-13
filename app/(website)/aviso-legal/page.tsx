export default function AvisoLegalPage() {
    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl legal-document">
                <h1 className="text-3xl lg:text-4xl text-primary mb-8 text-center font-bold">Aviso Legal</h1>

                <div className="prose prose-lg text-text-main max-w-none text-justify">
                    <p>
                        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), a continuación se exponen los datos identificativos de la titular del sitio web.
                    </p>

                    <h3>1. Datos Identificativos</h3>
                    <p>
                        <strong>Titular:</strong> Beatriz Olivares Castellanos<br />
                        <strong>NIF/DNI:</strong> 74444447W<br />
                        <strong>Domicilio:</strong> Elche (Alicante), España<br />
                        <strong>Correo electrónico:</strong> beatrizoc99@hotmail.com<br />
                        <strong>Actividad:</strong> Servicios de educación, pedagogía y clases particulares.
                    </p>

                    <h3>2. Propiedad Intelectual</h3>
                    <p>
                        El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de Beatriz Olivares Castellanos y no se permite la reproducción y/o publicación, total o parcial, del sitio web, ni su tratamiento informático, su distribución, su difusión, ni su modificación, transformación o descompilación, ni demás derechos reconocidos legalmente a su titular, sin el permiso previo y por escrito del mismo.
                    </p>

                    <h3>3. Protección de Datos Personales</h3>
                    <p>
                        El usuario puede consultar toda la información relativa al tratamiento de sus datos personales que recoge el Titular en la página de <a href="/politica-de-privacidad" className="text-secondary hover:underline">Política de Privacidad</a>.
                    </p>

                    <h3>4. Exclusión de Garantías y Responsabilidad</h3>
                    <p>
                        El Titular no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran traer causa de:
                    </p>
                    <ul>
                        <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento de la web, o de sus servicios y contenidos.</li>
                        <li>La existencia de virus, programas maliciosos o lesivos en los contenidos.</li>
                        <li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal.</li>
                        <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en el sitio web.</li>
                    </ul>

                    <h3>5. Ley Aplicable y Jurisdicción</h3>
                    <p>
                        Con carácter general las relaciones entre Beatriz Olivares Castellanos con los Usuarios de sus servicios telemáticos, presentes en esta web, se encuentran sometidas a la legislación y jurisdicción españolas y a los tribunales de Elche.
                    </p>

                    <p className="mt-8 text-sm text-gray-500">
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                    </p>
                </div>
            </div>
        </section>
    );
}
