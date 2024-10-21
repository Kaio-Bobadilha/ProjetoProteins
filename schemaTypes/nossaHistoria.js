// schemas/nossaHistoria.js
export default {
    name: 'nossaHistoria',
    type: 'document',
    title: 'Nossa História',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
        description: 'Título da seção "Nossa História"',
      },
      {
        name: 'content',
        type: 'text',
        title: 'Conteúdo',
        description: 'Texto que descreve a história da empresa',
      },
    ],
  }
  