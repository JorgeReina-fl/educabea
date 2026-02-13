'use client'

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Steps() {
    const steps = [
        {
            id: 1,
            title: "Protagonismo",
            description: "Fomento metodologías activas como Montessori y Freinet, priorizando al alumnado como protagonista.",
            image: "/assets/numero1-BnxJ1DE2.png"
        },
        {
            id: 2,
            title: "Materiales",
            description: "Apoyo la educación manipulativa con actividades visuales y materiales táctiles para el aprendizaje.",
            image: "/assets/numero2-B5h_wsj6.png"
        },
        {
            id: 3,
            title: "Proyectos",
            description: "Uso aprendizaje basado en proyectos para interiorizar conceptos teóricos, fomentando investigación y habilidades integrales.",
            image: "/assets/numero3-A_dt-VAe.png"
        }
    ];

    return (
        <section
            className="py-16 relative overflow-hidden -mt-16 z-11 rounded-t-[3rem] md:rounded-t-[4rem] section-min-height pb-30"
            style={{
                backgroundColor: 'hsl(13, 42%, 20%)',
            }}
        >
            <div
                className="absolute inset-0 opacity-15 pointer-events-none "
                style={{
                    backgroundImage: 'url("/background-pattern.png")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto'
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal className="text-center mb-20">
                    <h2 className="text-5xl text-white font-display mb-6">Metodología y valores</h2>
                    <p className="text-white/90 max-w-2xl mx-auto text-lg">
                        Un proceso cercano y profesional donde el protagonista siempre es el alumno.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    {/* Dashed Connecting Line (Desktop) */}

                    {steps.map((step) => (
                        <ScrollReveal key={step.id} className="flex flex-col items-center text-center group relative">
                            <div className="relative w-64 h-64 mb-8">
                                {/* Main Image Container */}

                                <div className="absolute inset-3 rounded-full overflow-hidden border-20 border-white/10 z-20">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-contain hover:translate-y-0.5 transition-transform duration-500 ease-in-out"
                                    />
                                </div>

                                {/* Number Badge - Top Left */}
                                <div className="absolute -top20 -left20 bg-secondary text-[hsl(13,42%,20%)] font-display w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg z-30 border-4 border-[hsl(13,42%,20%)]">
                                    {step.id.toString().padStart(2, '0')}
                                </div>
                            </div>
                            <h3 className="text-3xl text-white font-display mb-4">{step.title}</h3>
                            <p className="text-white/80 text-lg leading-relaxed px-4">{step.description}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
