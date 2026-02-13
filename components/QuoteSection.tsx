'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function QuoteSection() {
    return (
        <section className="py-16 md:py-24 bg-zinc-50 overflow-hidden -mt-16 z-14 relative rounded-t-[3rem] md:rounded-t-[4rem] -mt-16 z-10 section-min-height">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

                {/* Visual Block (Montessori Image) */}
                <ScrollReveal className="w-full md:w-1/2 relative">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Find the Montessori image from public_html assets */}
                        <Image
                            src="/assets/montesory-8FbsVTWX.png"
                            alt="Material Montessori"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
                </ScrollReveal>

                {/* Quote Text */}
                <ScrollReveal className="w-full md:w-1/2 text-center md:text-left">
                    <div className="inline-block p-2 px-4 bg-primary/5 text-primary rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                        Filosofía Educativa
                    </div>
                    <blockquote className="text-3xl lg:text-4xl font-display text-text-main leading-snug mb-6">
                        "La esencia de la educación es ayudar al niño en su desarrollo y ayudarlo a adaptarse a cualquier situación que el presente le requiera."
                    </blockquote>
                    <cite className="text-xl text-secondary font-display not-italic">
                        — Maria Montessori
                    </cite>
                </ScrollReveal>

            </div>
        </section>
    )
}
