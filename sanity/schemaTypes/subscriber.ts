import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'subscriber',
    title: 'Suscriptor Newsletter',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'subscribedAt',
            title: 'Fecha de Suscripción',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isActive',
            title: 'Activo',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'email',
            subtitle: 'subscribedAt',
        },
    },
})
