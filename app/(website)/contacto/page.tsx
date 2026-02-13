'use client';

import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "");
    return (
        <div className="bg-zinc-50 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-secondary font-display text-lg block mb-2">¿Hablamos?</span>
                    <h1 className="text-4xl lg:text-5xl text-primary font-display mb-4">Contacta conmigo</h1>
                    <p className="text-text-main max-w-2xl mx-auto">
                        Si tienes alguna duda, propuesta o simplemente quieres saludar, estaré encantada de leerte.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-display text-primary mb-8">Información de contacto</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Email</h4>
                                    <a href="mailto:beatrizoc99@hotmail.com" className="text-text-light hover:text-secondary transition-colors">
                                        beatrizoc99@hotmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Ubicación</h4>
                                    <p className="text-text-light">
                                        Elche, Alicante<br />
                                        España
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-primary/5 rounded-xl">
                            <p className="text-primary text-sm italic">
                                "La educación es el arma más poderosa que puedes usar para cambiar el mundo." - Nelson Mandela
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        {state.succeeded ? (
                            <div className="flex flex-col items-center justify-center text-center h-full py-12">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-display text-primary mb-2">¡Mensaje enviado!</h3>
                                <p className="text-text-light max-w-xs mx-auto">
                                    Gracias por contactar conmigo. Te responderé lo antes posible.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="tucorreo@ejemplo.com"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                        placeholder="¿En qué puedo ayudarte?"
                                        required
                                    ></textarea>
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="privacy"
                                            name="privacy"
                                            type="checkbox"
                                            required
                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-secondary"
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <label htmlFor="privacy" className="font-medium text-text-main">
                                            He leído y acepto la <a href="/politica-de-privacidad" target="_blank" className="text-primary hover:text-secondary underline">Política de Privacidad</a>
                                        </label>
                                        <p className="text-text-light text-xs mt-1">
                                            Tus datos se usarán para responder a tu consulta.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-alt transition-colors duration-300 shadow-md hover:shadow-lg transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
