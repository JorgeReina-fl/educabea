import Link from "next/link";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText } from "next-sanity";

// Define the shape of a post
interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: any;
    publishedAt: string;
    body: any;
    author: { name: string; image: any };
    categories: { title: string }[];
}

// GROQ Query
const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  author->{name, image},
  categories[]->{title}
}`;

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export async function generateStaticParams() {
    const posts = await client.fetch(`*[_type == "post"]{ slug }`);
    return posts.map((post: any) => ({
        slug: post.slug.current,
    }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    let post: Post = await client.fetch(query, { slug: params.slug });

    // Fallback for Strategy Phase 1 (Example Post)
    if (!post && params.slug === "como-aplicar-montessori-casa") {
        post = {
            _id: "example-post-1",
            title: "Cómo aplicar Montessori en casa hoy mismo",
            slug: { current: "como-aplicar-montessori-casa" },
            mainImage: null,
            publishedAt: new Date().toISOString(),
            author: { name: "Beatriz Olivares", image: null },
            categories: [{ title: "Montessori" }, { title: "Hogar" }],
            body: [
                {
                    _key: "1",
                    _type: "block",
                    children: [{ _key: "1a", _type: "span", text: "Aplicar la filosofía Montessori en casa no requiere gastar una fortuna en materiales específicos ni tener una habitación de revista. Se trata más bien de una actitud y de preparar el entorno para fomentar la autonomía.", marks: [] }],
                    markDefs: [],
                    style: "normal"
                },
                {
                    _key: "2",
                    _type: "block",
                    children: [{ _key: "2a", _type: "span", text: "Aquí tienes 3 consejos sencillos para empezar:", marks: [] }],
                    markDefs: [],
                    style: "h3"
                },
                {
                    _key: "3",
                    _type: "block",
                    children: [{ _key: "3a", _type: "span", text: "1. Todo a su altura: Baja los percheros, coloca sus juguetes en estanterías accesibles y deja que participe en poner la mesa.", marks: [] }],
                    markDefs: [],
                    style: "normal"
                },
                {
                    _key: "4",
                    _type: "block",
                    children: [{ _key: "4a", _type: "span", text: "2. Orden y simplicidad: Menos es más. Tén pocos juguetes disponibles y rótalos. El orden externo ayuda al orden interno.", marks: [] }],
                    markDefs: [],
                    style: "normal"
                },
                {
                    _key: "5",
                    _type: "block",
                    children: [{ _key: "5a", _type: "span", text: "3. Fomenta la vida práctica: Deja que se vista solo, que se lave las manos, que ayude a limpiar... aunque tarde más y no quede perfecto. El proceso es lo importante.", marks: [] }],
                    markDefs: [],
                    style: "normal"
                }
            ]
        };
    }

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-display text-primary mb-4">Artículo no encontrado 😔</h1>
                <Link href="/blog" className="text-secondary hover:underline">Volver al blog</Link>
            </div>
        )
    }

    return (
        <article className="bg-white min-h-screen py-24">
            <div className="post-content-container">
                {/* Header */}
                <div className="text-center">
                    <div className="flex justify-center gap-2 mb-4">
                        {post.categories?.map((cat, idx) => (
                            <span key={idx} className="bg-secondary/20 text-text-main text-sm font-semibold px-3 py-1 rounded-full">{cat.title}</span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="post-title">
                        {post.title}
                    </h1>

                    {/* Author and Date */}
                    <div className="text-center">
                        {post.author && (
                            <div className="flex items-center justify-center gap-2 mb-4 text-gray-500 text-sm">
                                {post.author.image && (
                                    <Image
                                        src={urlFor(post.author.image).width(40).height(40).url()}
                                        alt={post.author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )}
                                <span>{post.author.name}</span>
                            </div>
                        )}

                        <div className="post-date text-gray-500 text-sm">
                            {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                {post.mainImage && (
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="post-featured-image"
                        priority
                    />
                )}

                {/* Content */}
                <div className="post-body">
                    <PortableText value={post.body} />
                </div>

                {/* Back Link */}
                <div className="mt-12 text-center">
                    <Link href="/blog" className="inline-flex items-center text-secondary font-medium hover:underline gap-2">
                        ← Volver al Blog
                    </Link>
                </div>

            </div>
        </article>
    );
}
