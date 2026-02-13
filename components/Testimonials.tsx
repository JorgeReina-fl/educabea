'use client'

import React from 'react';
import ScrollReveal from "./ScrollReveal";
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah McAllister",
            role: "Mamá de Emily (Dublín)",
            text: "Beatriz combines the best of both worlds: Spanish warmth and the Montessori methodology she applied perfectly while working in our Crèche in Dublin. My daughter simply loves her!",
            initials: "SM",
            color: "bg-blue-100 text-blue-600"
        },
        {
            id: 2,
            name: "Elena García",
            role: "Mamá de Lucas",
            text: "Gracias a sus consejos, hemos transformado el cuarto de juegos en un ambiente Montessori real. Bea es pura inspiración y nos ha dado herramientas prácticas para el día a día.",
            initials: "EG",
            color: "bg-secondary/20 text-secondary"
        },
        {
            id: 3,
            name: "Marcos Ruiz",
            role: "Papá de Sofía",
            text: "Se nota la experiencia internacional. Tiene una visión muy abierta y respetuosa de la educación. Su paciencia y profesionalidad se notaron desde el primer día de clases.",
            initials: "MR",
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <section className="py-16 bg-orange-100 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] -mt-16 z-10 section-min-height pb-30">
            <div className="container mx-auto px-4">
                <ScrollReveal className="text-center mb-16">
                    <span className="text-secondary font-display text-lg block mb-2">Lo que dicen las familias</span>
                    <h2 className="text-4xl md:text-5xl text-primary font-display mb-6">Confianza y Resultados</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <ScrollReveal key={t.id} className="bg-zinc-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-bold ${t.color}`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{t.name}</h4>
                                    <p className="text-sm text-text-light">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-text-main italic leading-relaxed">
                                "{t.text}"
                            </p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
