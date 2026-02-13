'use client';

import React from 'react';
import Link from "next/link";
import { Check, ClipboardList, Brain, Heart, GraduationCap } from "lucide-react";

export default function PrivateClassesPage() {
    return (
        <div className="bg-zinc-50 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-display text-lg block mb-2">Apoyo Escolar Personalizado</span>
                    <h1 className="text-4xl lg:text-5xl text-primary font-display mb-6">Clases Particulares y Refuerzo</h1>
                    <p className="text-text-main max-w-2xl mx-auto text-lg">
                        Más que ayuda con los deberes: enseño a aprender. Un enfoque individualizado para Primaria y ESO, combinando técnicas de estudio con motivación.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20 items-center">

                    {/* Visual Side */}
                    <div className="relative">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative z-20">
                            <h3 className="text-2xl font-display text-primary mb-6">¿Qué trabajamos?</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: ClipboardList, text: "Organización y Planificación" },
                                    { icon: Brain, text: "Técnicas de Estudio Activo" },
                                    { icon: Heart, text: "Gestión Emocional y Motivación" },
                                    { icon: GraduationCap, text: "Refuerzo en Asignaturas Clave" },
                                    { icon: Check, text: "Preparación de Exámenes" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 p-3 hover:bg-zinc-50 rounded-xl transition-colors">
                                        <div className="bg-primary/10 p-2 rounded-full text-primary">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-text-main font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-[200px] hidden md:block z-30">
                            <p className="text-sm font-bold text-primary">"Enseñar no es transferir conocimiento, es crear la posibilidad de producirlo."</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-display text-primary mb-4">Metodología Propia</h3>
                            <p className="text-text-light leading-relaxed">
                                Mi experiencia en Dublín y mi formación en Pedagogía Terapéutica me permiten adaptar cada clase a las necesidades cognitivas y emocionales del alumno. No todos aprenden igual, por eso no enseño igual a todos.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary">
                            <h4 className="font-bold text-lg text-primary mb-2">🎓 Niveles y Modalidad</h4>
                            <p className="text-text-main">
                                <strong>Primaria e Infantil:</strong> Todas las asignaturas.<br />
                                <strong>ESO:</strong> Inglés y asignaturas de letras/humanidades.<br />
                                <strong>Modalidad:</strong> Presencial (Elche y alrededores) o Online.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contacto" className="bg-primary text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:bg-primary-alt hover:shadow-xl transition-all text-center">
                                Reservar Primera Clase
                            </Link>
                            <Link href="/#about" className="bg-transparent border-2 border-primary/10 text-primary font-medium py-3 px-8 rounded-xl hover:bg-primary/5 transition-all text-center">
                                Conocer más sobre mí
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ / Pricing Teaser */}
                <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-display mb-4">¿Tienes dudas sobre horarios o tarifas?</h3>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            Cada alumno es un mundo y las tarifas pueden variar según el nivel y la frecuencia. ¡Escríbeme sin compromiso y buscamos el mejor plan!
                        </p>
                        <Link href="https://wa.me/34666666666" target="_blank" className="inline-flex items-center gap-2 bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-white transition-colors">
                            <span>Consultar por WhatsApp</span>
                            {/* WhatsApp Icon usually needs specific SVG or Lucide doesn't have brand icons, using MessageCircle as fallback or text */}
                        </Link>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/background-pattern.png')] bg-repeat"></div>
                </div>

            </div>
        </div>
    );
}
