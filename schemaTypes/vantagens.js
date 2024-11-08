export default {
    name: 'vantagens',
    type: 'document',
    title: 'Vantagens',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Título',
      },
      {
        name: 'vantagensList',
        type: 'array',
        of: [{ type: 'string' }],
        title: 'Lista de Vantagens',
      },
    ],
  };
  