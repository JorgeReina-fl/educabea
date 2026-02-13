"use client";

import Image from 'next/image';
import Link from 'next/link';

const books = [
    {
        title: "El cerebro del niño",
        image: "/ElCerebroDelNino.webp",
        id: 1
    },
    {
        title: "Las escuelas que cambian el mundo",
        image: "/escuelas.jpg",
        id: 2
    },
    {
        title: "Inteligencias Múltiples",
        image: "/inteligencias.jpg",
        id: 3
    }
];

export default function BooksSection() {
    const books = [
        {
            title: "El cerebro del niño",
            image: "/ElCerebroDelNino.webp",
            id: 1,
            description: "Una guía imprescindible para entender cómo se desarrolla el cerebro infantil y cómo potenciar su inteligencia emocional.",
            amazonLink: "https://www.amazon.es/cerebro-del-ni%C3%B1o-Fuera-colecci%C3%B3n-ebook/dp/B00841YEE0/ref=sr_1_5?adgrpid=1308419272703132&dib=eyJ2IjoiMSJ9.CxDYNKq0wqSVB6CSJC8zckT093NTZX6H8UPhnktALIirV-Yxgoc5JTDk-IIQr7C9GyFhtskp8I6zZMyT07HfUtZlEK5ZL9dVkvBz-S5YouQw-eqMFdJlKrBMjiXy1et8v6JqQliZrLgK5Xp5sZw4AITyhZ_G-JNwK9jIOZ90nJ4QSBQBZSox9D6O0J_k7bGAp7vejMBT6u3_bpNIOzPEXatoC6vjiqemv5jJiAfFqRDY0CPjggQq2IituNDEVR3DUS6qDpcv2Z_uKgnrx53Bv8r-f5-2N43lylXEV5MidOg.QO_Dnp4zsTl6mVL7GN58d0jFAGNNlRKJA16Xo781zs0&dib_tag=se&hvadid=81776293403172&hvbmt=be&hvdev=c&hvlocphy=292926&hvnetw=o&hvqmt=e&hvtargid=kwd-81776441318213%3Aloc-170&hydadcr=22726_1847819&keywords=el+cerebro+del+ni%C3%B1o&mcid=a628833473783b3d8b4c16aa042e7c71&msclkid=5b503c03f59f15a8d371558c66ed24ba&qid=1771017079&sr=8-5"
        },
        {
            title: "Las escuelas que cambian el mundo",
            image: "/escuelas.jpg",
            id: 2,
            description: "Un recorrido por las escuelas más innovadoras del mundo que están transformando la educación.",
            amazonLink: "https://www.amazon.es/Las-escuelas-cambian-mundo-CLAVE/dp/846634778X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25SZPWWOM2Q82&dib=eyJ2IjoiMSJ9.1tMOYS-CjdLXIeAWhBJySqCU3NqtJtCh775cTkbM3V7FBe1LswKXwL7kO-_gx8tY5LHDpgBpDTH3jKxg9l8m56zbuKBSzhvN5yqVgOZlZxGEz1DYkx1UakI0sumE26OBfmvtRzam8OGOpSyjG_rTcpG5lVT3SUvKPXbo0CJ-mlEfjxLHqUMG6AkcFA0_wKHLb1Gr29Bt9dvbMmiwkZjRAUIkh75pbOF16Fpk0wVyo2yZkX6LG4vN3SjHr5UFK4kDTtfkc6FYLtTnWXU7baj55b16fBdcRujAr2fwPNyLpPA.dCPV_sK9sizBVfQODFJ3jOZwNOLylfTNsSsmWaKpKYE&dib_tag=se&keywords=Las+escuelas+que+cambian+el+mundo&qid=1771017830&sprefix=las+escuelas+que+cambian+el+mundo%2Caps%2C251&sr=8-1" // Placeholder
        },
        {
            title: "Inteligencias Múltiples",
            image: "/inteligencias.jpg",
            id: 3,
            description: "Descubre la teoría de Gardner y cómo aplicarla para potenciar los talentos únicos de cada niño.",
            amazonLink: "https://www.amazon.es/Inteligencias-m%C3%BAltiples-teor%C3%ADa-pr%C3%A1ctica-Educaci%C3%B3n/dp/8449336252/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TP3B0NK1YKYK&dib=eyJ2IjoiMSJ9.bXrJtIb8hjDmtUWpo2LzPd48q4a2yIKg_7BU4s75o0NpEd-U5HBG0tBpwCNHix1WKMl3_vY7bXplzKkUN9LSctsijvuo6oY9y-HrPCgQ1FRo0H9sG1XhAxB_faDjwPqoI3s4u5edw9AT3TZkwrl063bizjF6c4fmf1L06WnvCEaRzqcHI0i3gLHtsFcOtFxv1VFcOu17eUMfeiBLVoCPKuGREhxVDKxxWqITh2fsqKXABRr3wpyP6au0jrItRmKljVTNNVjJqZIAlXTENu8namuFZZEGg0Kqd9iHSrW4D4s.0mWvzn_FBBBEGQkLTHt5Xv7ullS7HqmcY4MLxdxL0no&dib_tag=se&keywords=Inteligencias+M%C3%BAltiples&qid=1771017852&sprefix=inteligencias+m%C3%BAltiples%2Caps%2C253&sr=8-1" // Placeholder
        }
    ];

    return (
        <section className="bg-primary-alt pt-0 pb-0">
            <div className="mx-auto">
                <div className="bg-primary rounded-t-[3rem] md:rounded-t-[4rem] px-8 -mt-16 z-13 py-16 md:py-24 relative overflow-hidden pb-30">

                    {/* Header */}
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-display text-white mb-6">
                            Material Didáctico
                        </h2>
                        <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Recursos educativos seleccionados para apoyar el aprendizaje.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center relative z-10">
                        {books.map((book) => (
                            <div key={book.id} className="flex flex-col items-center group w-full max-w-[280px]">
                                {/* Image Container with Hover Effect */}
                                <div className="relative w-[140px] h-[200px] mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-2 shadow-2xl rounded-md overflow-hidden">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 140px, 140px"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-display text-white text-center mb-3 min-h-[3.5rem] flex items-center justify-center leading-snug">
                                    {book.title}
                                </h3>

                                <p className="text-white/70 text-sm text-center mb-6 leading-relaxed line-clamp-3">
                                    {book.description}
                                </p>

                                <Link
                                    href={book.amazonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-primary font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-secondary hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-sm"
                                >
                                    <span>Comprar en Amazon</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
