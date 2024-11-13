export default {
    name: 'produtos-tene',
    type: 'document',
    title: 'Produtos Tenebres',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Título',
      },
      {
        name: 'descricao',
        type: 'text',
        title: 'Descrição',
      },
      {
        name: 'produtosList',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'produto' }] }],
        title: 'Lista de Produtos',
      },
    ],
  };
  