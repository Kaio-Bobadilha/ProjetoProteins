export default {
    name: 'Contato',
    type: 'document',
    title: 'Contato',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
        description: 'Título da seção "Contato"',
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'descricao',
        description: 'Descrição da seção "Contato"',
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'imagem',
        description: 'Imagem da seção "Contato"',
      },
    ],
  }