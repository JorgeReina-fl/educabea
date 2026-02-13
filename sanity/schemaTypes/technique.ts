import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'studyTechnique',
    title: 'Técnica de Estudio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        // User data uses 'body' (PortableText) not just description
        defineField({
            name: 'body',
            title: 'Contenido',
            type: 'blockContent',
        }),
        defineField({
            name: 'description', // Keeping this as optional/fallback or for preview
            title: 'Descripción Corta',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
