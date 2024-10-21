// schemas/parceiros.js
export default {
    name: 'parceiros',
    type: 'document',
    title: 'Parceiros',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
        description: 'Título da seção "Parceiros"',
      },
      {
        name: 'partners',
        type: 'array',
        title: 'Lista de Parceiros',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', type: 'string', title: 'Nome do Parceiro' },
              { name: 'logo', type: 'image', title: 'Logo do Parceiro' },
            ],
          },
        ],
      },
    ],
  }
  