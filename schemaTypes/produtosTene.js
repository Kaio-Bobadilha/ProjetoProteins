export default {
    name: 'produtos',
    type: 'document',
    title: 'Produtos',
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
  