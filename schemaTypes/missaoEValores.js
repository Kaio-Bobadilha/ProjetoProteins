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
        name: 'description',
        type: 'string',
        title: 'Descrição',
        description: 'Descrição da seção "Missão e Valores"',
      },
    ],
  }
  