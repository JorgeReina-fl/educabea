import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'learningMaterial',
    title: 'Material Didáctico',
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
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string', // User data has this as string
            options: {
                list: [
                    { title: 'Necesidades Especiales', value: 'special-needs' },
                    { title: 'Infantil', value: 'infantil' },
                    { title: 'Primaria', value: 'primaria' },
                ]
            }
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'fileUpload',
            title: 'Archivo PDF/Recurso',
            type: 'file',
        }),
        defineField({
            name: 'price',
            title: 'Precio (0 = Gratis)',
            type: 'number',
        }),
        defineField({
            name: 'externalLink',
            title: 'Enlace Externo (Opcional)',
            type: 'url',
        }),
    ],
})
