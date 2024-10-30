export default {
    name: 'produto',
    type: 'document',
    title: 'Produtos',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
        description: 'Título da seção "Produtos"',
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'descricao',
        description: 'Descrição da seção "Produtos"',
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem',
        description: 'Imagem da seção "Produtos"'
      },
    ],
  }