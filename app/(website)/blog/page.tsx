import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

// Define the shape of a post
interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: any;
    publishedAt: string;
    excerpt: string; // We'll infer excerpt from body blocks later if needed, or query specifically
    categories: { title: string }[];
}

// GROQ Query
const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  categories[]->{title},
  "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
}`;

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function BlogPage() {
    let posts: Post[] = [];

    try {
        posts = await client.fetch(query);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }

    // Fallback/Example post if no content (Strategy Phase 1)
    if (posts.length === 0) {
        posts = [
            {
                _id: "example-post-1",
                title: "Cómo aplicar Montessori en casa hoy mismo",
                slug: { current: "como-aplicar-montessori-casa" },
                mainImage: null, // Component handles null
                publishedAt: new Date().toISOString(),
                excerpt: "Descubre cómo pequeños cambios en tu hogar pueden fomentar la autonomía y concentración de tus hijos sin gastar una fortuna en materiales.",
                categories: [{ title: "Montessori" }, { title: "Hogar" }]
            }
        ];
    }

    return (
        <div className="bg-zinc-50 min-h-screen py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-display text-lg block mb-2">Compartiendo Ideas</span>
                    <h1 className="text-4xl lg:text-5xl text-primary font-display mb-4">Blog Educativo</h1>
                    <p className="text-text-main max-w-2xl mx-auto">
                        Recursos, reflexiones y consejos para maestros y familias.
                    </p>
                </div>

                {/* Categories (Placeholder for now) */}
                {/* <div className="flex justify-center gap-4 mb-12 flex-wrap">
           <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow text-primary">Todos</button> 
        </div> */}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <article key={post._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                                <Link href={`/blog/${post.slug.current}`} className="block relative h-64 overflow-hidden">
                                    {post.mainImage ? (
                                        <Image
                                            src={urlFor(post.mainImage).width(800).height(600).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                            Sin imagen
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {post.categories?.map((cat, idx) => (
                                            <span key={idx} className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                {cat.title}
                                            </span>
                                        ))}
                                    </div>
                                </Link>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4 text-sm text-gray-500 flex items-center gap-2">
                                        <span>{new Date(post.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                    </div>

                                    <h3 className="text-xl font-display text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                                        <Link href={`/blog/${post.slug.current}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <p className="text-text-light text-sm line-clamp-3 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <Link href={`/blog/${post.slug.current}`} className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
                                        Leer más →
                                    </Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-gray-500 italic">No hay artículos publicados todavía.</p>
                            <p className="text-sm text-gray-400 mt-2">Prueba a crear uno desde el <a href="/studio" className="underline text-primary">Sanity Studio</a>.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
