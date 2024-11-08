export default {
  name: 'cicloDeVida',
  type: 'document',
  title: 'Ciclo de Vida',
  fields: [
    {
      name: 'titulo',
      type: 'string',
      title: 'Título',
      description: 'Título da seção "Ciclo de Vida"'
    },
    {
      name: 'estagios',
      type: 'array',
      title: 'Estágios',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'nome',
              type: 'string',
              title: 'Nome do estágio'
            },
            {
              name: 'imagem',
              type: 'image',
              title: 'Imagem do estágio',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ]
};
