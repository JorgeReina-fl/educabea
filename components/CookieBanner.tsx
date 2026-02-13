"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        // Only show if consent is not yet given/denied
        if (consent === null) {
            // Small delay to prevent hydration mismatch and show animation
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setIsVisible(false);
        // Here you would typically initialize GA
        console.log("Cookies accepted");
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "false");
        setIsVisible(false);
        console.log("Cookies declined");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="bg-secondary/20 p-4 rounded-full min-w-16 h-16 flex items-center justify-center text-primary">
                    <Cookie size={32} />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-bold text-primary mb-2 font-[system-ui,_sans-serif]">Uso de Cookies</h3>
                    <p className="text-text-main text-sm leading-relaxed font-[system-ui,_sans-serif]">
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia.
                        Puedes aceptar todas las cookies o configurarlas según tus preferencias.
                        Consulta nuestra <Link href="/politica-de-cookies" className="text-secondary underline hover:text-primary font-bold">Política de Cookies</Link>.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                        onClick={handleDecline}
                        className="px-6 py-3 rounded-xl border-2 border-gray-200 text-text-light font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm font-[system-ui,_sans-serif] whitespace-nowrap"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-alt transition-colors shadow-lg hover:shadow-xl transform active:scale-95 text-sm font-[system-ui,_sans-serif] whitespace-nowrap"
                    >
                        Aceptar todas
                    </button>
                </div>
            </div>
        </div>
    );
}
