export default {
    name: 'cicloVida',
    type: 'document',
    title: 'Ciclo de Vida',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Título',
      },
      {
        name: 'conteudo',
        type: 'array',
        of: [{ type: 'block' }],
        title: 'Conteúdo',
      },
    ],
  };
  