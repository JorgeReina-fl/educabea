import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

// Define the shape
interface Technique {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    mainImage: any;
}

// GROQ Query
const query = `*[_type == "studyTechnique"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  mainImage
}`;

export const revalidate = 60;

export default async function TechniquesPage() {
    const techniques: Technique[] = await client.fetch(query);

    return (
        <div className="bg-zinc-50 min-h-screen py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-display text-lg block mb-2">Aprender a Aprender</span>
                    <h1 className="text-4xl lg:text-5xl text-primary font-display mb-4">Técnicas de Estudio</h1>
                    <p className="text-text-main max-w-2xl mx-auto">
                        Estrategias probadas para mejorar la concentración, la memoria y el rendimiento académico.
                    </p>
                </div>

                {/* Grid (using a different layout than blog/material to differentiate) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {techniques.length > 0 ? (
                        techniques.map((item, index) => (
                            <div key={item._id} className={`bg-white p-6 rounded-3xl shadow-sm flex flex-col md:flex-row gap-6 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden shrink-0">
                                    {item.mainImage ? (
                                        <Image
                                            src={urlFor(item.mainImage).width(500).height(500).url()}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary/40">Imagen</div>
                                    )}
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <h3 className="text-2xl font-display text-primary mb-3">{item.title}</h3>
                                    <div className="w-12 h-1 bg-secondary mx-auto md:mx-0 mb-4 rounded-full"></div>
                                    <p className="text-text-main mb-6">{item.description}</p>
                                    <Link href={`/tecnicas-de-estudio/${item.slug.current}`} className="text-primary-alt font-medium hover:text-secondary underline decoration-2 underline-offset-4">
                                        Descubrir Técnica
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-gray-500 italic">No hay técnicas publicadas todavía.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
