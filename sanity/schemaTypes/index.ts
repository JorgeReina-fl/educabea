import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import material from './material'
import technique from './technique'

import subscriber from './subscriber'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, author, category, material, technique, subscriber, blockContent],
}
