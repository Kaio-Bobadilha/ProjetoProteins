export default {
  name: 'vantagens',
  type: 'document',
  title: 'Vantagens',
  fields: [
    {
      name: 'titulo',
      type: 'string',
      title: 'Título',
      description: 'Título da seção "Vantagens"'
    },
    {
      name: 'listaDeVantagens',
      type: 'array',
      title: 'Lista de Vantagens',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'descricao',
              type: 'string',
              title: 'Descrição da vantagem'
            },
            {
              name: 'imagem',
              type: 'image',
              title: 'Imagem da vantagem',
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
