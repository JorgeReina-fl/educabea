export default function PoliticaCookiesPage() {
    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl legal-document">
                <h1 className="text-3xl lg:text-4xl text-primary mb-8 text-center font-bold">Política de Cookies</h1>

                <div className="prose prose-lg text-text-main max-w-none text-justify">
                    <p>
                        En esta web recopilamos y utilizamos la información según se indica en nuestra política de privacidad. Una de las formas en las que recopilamos información es a través del uso de la tecnología llamada "cookies".
                    </p>

                    <h3>¿Qué es una cookie?</h3>
                    <p>
                        Una "cookie" es un pequeño archivo de texto que se almacena en tu navegador cuando visitas casi cualquier página web. Su utilidad es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
                    </p>

                    <h3>Cookies utilizadas en este sitio web</h3>
                    <p>
                        Este sitio web utiliza las siguientes <strong>cookies propias</strong>:
                    </p>
                    <ul>
                        <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.</li>
                    </ul>

                    <p>
                        Este sitio web utiliza las siguientes <strong>cookies de terceros</strong>:
                    </p>
                    <ul>
                        <li><strong>Redes sociales:</strong> Cada red social utiliza sus propias cookies para que puedas pinchar en botones del tipo Me gusta o Compartir.</li>
                    </ul>

                    <h3>Desactivación o eliminación de cookies</h3>
                    <p>
                        En cualquier momento podrás ejercer tu derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que estés usando.
                    </p>

                    <h3>Notas adicionales</h3>
                    <ul>
                        <li>Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</li>
                        <li>Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debes efectuar tu derecho a eliminación o desactivación de las mismas.</li>
                    </ul>

                    <p className="mt-8 text-sm text-gray-500">
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                    </p>
                </div>
            </div>
        </section>
    );
}
