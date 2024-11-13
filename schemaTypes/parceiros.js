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
      },
      {
        name: 'parceiros_image',
        type: 'image',
        title: 'Lista de Parceiros',
        
      },
    ],
  }
  