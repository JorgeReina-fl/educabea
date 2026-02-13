import { client } from '../../../../sanity/lib/client'
import { urlFor } from '../../../../sanity/lib/image'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 60;

interface Technique {
    title: string;
    mainImage: any;
    body: any;
    _updatedAt: string;
}

// GROQ to get single technique by slug
const query = `*[_type == "studyTechnique" && slug.current == $slug][0] {
  title,
  mainImage,
  body,
  _updatedAt
}`

export default async function TechniquePost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post: Technique = await client.fetch(query, { slug });

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold">Técnica no encontrada</h1>
                <Link href="/tecnicas-de-estudio" className="text-secondary hover:underline mt-4 block">
                    Volver al listado
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen pb-20">

            {/* Hero Header */}
            <div className="bg-zinc-50 py-16 lg:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/tecnicas-de-estudio" className="inline-flex items-center text-gray-500 hover:text-secondary mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Volver a Técnicas
                    </Link>

                    <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 max-w-4xl">
                        {post.title}
                    </h1>
                </div>
            </div>

            <div className="post-content-container relative z-20 -mt-10 px-4 lg:px-0">
                <div className="max-w-[800px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    {post.mainImage && (
                        <div className="relative w-full aspect-video">
                            <Image
                                src={urlFor(post.mainImage).width(1200).height(675).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="p-8 lg:p-16 post-body">
                        <PortableText value={post.body} />
                    </div>
                </div>
            </div>
        </div>
    )
}
