import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="section py-16 bg-white relative -mt-16 z-10 rounded-t-[3rem] md:rounded-t-[4rem] section-min-height pb-30">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative order-2 lg:order-1 flex justify-center">
                    {/* Using blackboard image as background or featured element */}
                    <div className="relative w-full max-w-md aspect-[4/3]">
                        <Image
                            src="/assets/pizarra-DG31Zs5b.png"
                            alt="Pizarra"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                    <span className="text-secondary font-display text-4xl mb-2 block">Sobre mí</span>
                    <h2 className="text-2xl text-primary font-display mb-6">Experiencia Profesional/Académica</h2>
                    <p className="text-text-main mb-6 leading-relaxed">
                        Tengo 25 años y soy graduada en Magisterio Infantil y Primaria con especialidad en Pedagogía Terapéutica y cursando la mención de Inglés.
                        <br /><br />
                        Mi pasión por la educación me llevó a <strong>Dublín (Irlanda)</strong>, donde trabajé durante un año en una escuela infantil. Allí me sumergí en la <strong>metodología Montessori</strong> auténtica, aprendiendo a fomentar la autonomía y el respeto por los ritmos naturales del niño en un entorno 100% bilingüe.
                    </p>
                    <p className="text-text-main mb-8 leading-relaxed">
                        Mi objetivo es fomentar aulas inclusivas y un aprendizaje multilingüe, atendiendo a la diversidad de cada alumno.
                    </p>

                    <Link
                        href="/contacto"
                        className="inline-block bg-secondary text-primary font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Contactar
                    </Link>
                </div>
            </div>
        </section>
    );
}
