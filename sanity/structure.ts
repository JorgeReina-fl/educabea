import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Gestionar Contenido')
        .items([
            S.documentTypeListItem('post').title('📝 Artículos del Blog'),
            S.divider(),
            S.documentTypeListItem('learningMaterial').title('📚 Material Didáctico'),
            S.documentTypeListItem('studyTechnique').title('🧠 Técnicas de Estudio'),
            S.divider(),
            S.documentTypeListItem('author').title('👤 Autores'),
            S.documentTypeListItem('category').title('🏷️ Categorías'),
            S.divider(),
            // Filter out independent items that we already grouped
            ...S.documentTypeListItems().filter(
                (item) => !['post', 'category', 'author', 'learningMaterial', 'studyTechnique', 'media.tag'].includes(item.getId()!)
            ),
        ])
