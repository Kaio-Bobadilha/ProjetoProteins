// schemas/missaoValores.js
export default {
    name: 'missaoValores',
    type: 'document',
    title: 'Missão e Valores',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
        description: 'Título da seção "Missão e Valores"',
      },
      {
        name: 'cards',
        type: 'array',
        title: 'Cards de Missão e Valores',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', type: 'string', title: 'Título do Card' },
              { name: 'description', type: 'text', title: 'Descrição do Card' },
            ],
          },
        ],
      },
    ],
  }
  