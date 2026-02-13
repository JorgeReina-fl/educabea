import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { Download, ExternalLink } from "lucide-react";

// Define the shape
interface Material {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    mainImage: any;
    fileUpload: any; // Asset reference
    fileUrl: string | null;
    externalLink: string;
    price: number;
}

// GROQ Query
// We need to expand file asset to get URL if it's a file
const query = `*[_type == "learningMaterial"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  mainImage,
  "fileUrl": fileUpload.asset->url,
  externalLink,
  price
}`;

export const revalidate = 60;

export default async function MaterialPage() {
    const materials: Material[] = await client.fetch(query);

    return (
        <div className="bg-zinc-50 min-h-screen py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-display text-lg block mb-2">Recursos para el Aula</span>
                    <h1 className="text-4xl lg:text-5xl text-primary font-display mb-4">Material Didáctico</h1>
                    <p className="text-text-main max-w-2xl mx-auto">
                        Descarga materiales creados con amor para hacer tus clases más dinámicas y efectivas.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {materials.length > 0 ? (
                        materials.map((item) => (
                            <div key={item._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                    {item.mainImage ? (
                                        <Image
                                            src={urlFor(item.mainImage).width(600).height(450).url()}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">Sin vista previa</div>
                                    )}
                                    {/* Price Tag */}
                                    {item.price ? (
                                        <div className="absolute top-3 right-3 bg-secondary text-primary font-bold px-3 py-1 rounded-full shadow-md">
                                            {item.price}€
                                        </div>
                                    ) : (
                                        <div className="absolute top-3 right-3 bg-green-500 text-white font-bold px-3 py-1 rounded-full shadow-md text-xs uppercase">
                                            Gratis
                                        </div>
                                    )}
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-lg font-display text-primary mb-2 leading-tight group-hover:text-secondary transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-text-light text-sm line-clamp-2 mb-4 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        {item.fileUrl ? (
                                            <a href={`${item.fileUrl}?dl=`} className="w-full bg-primary-alt hover:bg-primary text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                                <Download size={18} /> Descargar
                                            </a>
                                        ) : item.externalLink ? (
                                            <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="w-full bg-secondary hover:bg-secondary/80 text-primary font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                                <ExternalLink size={18} /> Ver Recurso
                                            </a>
                                        ) : (
                                            <button disabled className="w-full bg-gray-100 text-gray-400 py-2 rounded-lg cursor-not-allowed">No disponible</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-gray-500 italic">No hay material disponible todavía.</p>
                            <p className="text-sm text-gray-400 mt-2">Pronto subiremos nuevos recursos.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
