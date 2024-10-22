export default {
    name: 'nossaProducao',
    type: 'document',
    title: 'Nossa Produção',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
        description: 'Título da seção "Nossa Produção"',
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'descricao',
        description: 'Descrição da seção "Nossa Produção"',
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'imagem',
        description: 'Imagem da seção "Nossa Produção"',
      },
    ],
  }