'use client'

import React from 'react';
import ScrollReveal from "./ScrollReveal";
import { Download } from 'lucide-react';
import Image from 'next/image';

export default function LeadMagnet() {
    return (
        <section className="py-16 pb-30 bg-primary-alt text-white relative overflow-hidden section-min-height rounded-t-[3rem] md:rounded-t-[4rem] -mt-16 z-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-7 pointer-events-none" style={{ backgroundImage: 'url("/background-pattern.png")', backgroundSize: '400px' }}></div>

            <div className="container mx-auto px-4 relative z-14">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Visual Representation of the Guide (CSS Mockup because image gen failed) */}
                    <ScrollReveal className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-64 md:w-80 aspect-[3/4] bg-white rounded-r-2xl rounded-l-md shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col overflow-hidden border-l-8 border-secondary/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>

                            {/* Cover Content */}
                            <div className="relative z-10 p-8 flex flex-col h-full items-center text-center justify-between border border-gray-100/50 m-2 border-dashed rounded-xl">
                                <div>
                                    <span className="text-secondary font-display text-xl">Educabea</span>
                                    <h3 className="text-3xl text-primary font-display mt-4 leading-tight">5 Actividades Montessori</h3>
                                    <p className="text-text-light text-sm mt-2 font-medium">GUÍA PRÁCTICA PARA CASA</p>
                                </div>

                                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center">
                                    <span className="text-4xl">🧩</span>
                                </div>

                                <div className="w-full">
                                    <div className="w-full h-1 bg-secondary/20 mb-2"></div>
                                    <p className="text-xs text-text-light/70 uppercase tracking-widest">Para niños 3-6 años</p>
                                </div>
                            </div>
                        </div>
                        {/* Shadow/Stack effect */}
                    </ScrollReveal>

                    {/* Content */}
                    <ScrollReveal className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-display mb-6">¿Montessori en casa?</h2>
                        <h3 className="text-2xl text-secondary font-display mb-6">Empieza hoy mismo con esta guía gratuita.</h3>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                            Descubre 5 actividades sencillas, con materiales que ya tienes, para fomentar la autonomía y concentración de tus hijos. Sin complicaciones ni teorías densas.
                        </p>

                        <LeadMagnetForm />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

function LeadMagnetForm() {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [acceptedPrivacy, setAcceptedPrivacy] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptedPrivacy) {
            alert('Debes aceptar la política de privacidad.');
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error('Error al suscribirse');

            setStatus('success');
            // Auto-trigger download or show button
            // window.open('/guia-montessori.pdf', '_blank'); 
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm max-w-md mx-auto lg:mx-0 border border-white/10 text-center animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                    <Download size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">¡Suscripción confirmada!</h3>
                <p className="text-white/80 mb-6">Aquí tienes tu guía gratuita.</p>

                <a
                    href="/guia-montessori.pdf"
                    download="Guia-Montessori-EducaBea.pdf"
                    className="bg-secondary text-primary font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-primary transition-colors inline-flex items-center gap-2 w-full justify-center"
                >
                    <Download size={20} />
                    Descargar PDF
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm max-w-md mx-auto lg:mx-0 border border-white/10">
            <div className="flex flex-col gap-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu mejor email..."
                    className="px-4 py-3 rounded-xl border-2 border-white/50 outline-none focus:ring-2 focus:ring-secondary text-secondary placeholder-secondary/100 bg-transparent text-white"
                    required
                    disabled={status === 'loading'}
                />

                <div className="flex items-start gap-2 text-left">
                    <input
                        type="checkbox"
                        id="privacy-lead"
                        checked={acceptedPrivacy}
                        onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/50 bg-transparent text-secondary focus:ring-secondary focus:ring-offset-primary"
                        required
                    />
                    <label htmlFor="privacy-lead" className="text-xs text-white/80 leading-tight">
                        He leído y acepto la <a href="/politica-de-privacidad" target="_blank" className="underline hover:text-secondary">Política de Privacidad</a>.
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-secondary text-primary font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        'Procesando...'
                    ) : (
                        <>
                            <Download size={20} />
                            Descargar Guía Ahora
                        </>
                    )}
                </button>
            </div>
            <p className="text-white/50 text-xs mt-3 text-center">
                🔒 Tu privacidad es sagrada. Cero spam.
            </p>
        </form>
    );
}

