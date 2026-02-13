"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="home relative min-h-screen flex items-center justify-center overflow-hidden pt-1 pb-10"
            style={{
                background: "linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-alt) 100%)"
            }}
        >
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[max-content_440px] xl:grid-cols-[max-content_550px] gap-8 items-center justify-center lg:justify-between h-full pt-12 md:pt-20 pb-12">

                {/* Image (Mobile: Top / Desktop: Right/Order-1) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-[300px] md:w-[450px] lg:w-full mx-auto lg:mx-0 lg:order-2 flex justify-center"
                >
                    <div className="relative w-full aspect-[4/5] max-w-[320px] md:max-w-[450px] lg:max-w-[550px]">
                        <Image
                            src="/teacher2.png"
                            alt="Beatriz Olivares Maestra"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                            sizes="(max-width: 768px) 300px, (max-width: 1200px) 450px, 550px"
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-xl mx-auto lg:mx-0"
                >
                    <span className="block text-secondary font-medium text-lg md:text-xl mb-3">
                        Una maestra comprometida
                    </span>

                    <div className="relative mb-6">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight relative z-10">
                            Profesora en Elche
                        </h1>
                        <div className="absolute -right-0 -bottom-40 w-20 md:w-28 z-0">
                            <Image
                                src="/destello.png"
                                alt="Destello decorativo"
                                width={120}
                                height={120}
                                className="object-contain opacity-90"
                            />
                        </div>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6 text-white">
                        Creando entornos para <br /> que cada niño pueda <br /> brillar
                    </h2>

                    <p className="text-white/90 text-base md:text-lg mb-8 max-w-md font-sans font-light">
                        Comprometida con la educación infantil y primaria, creo en el poder del aprendizaje activo, la creatividad y los valores para formar futuros brillantes.
                    </p>

                    <Link
                        href="#footer"
                        className="inline-flex items-center gap-2 bg-secondary text-primary font-medium py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:translate-x-1 transition-all duration-300 group"
                    >
                        <span>Contáctame</span>
                        <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/50"
            >
                <span className="text-sm mb-3 font-light">Desliza para ver más</span>
                <ArrowDown className="animate-bounce mb-30" />
            </motion.div>
        </section>
    )
}
