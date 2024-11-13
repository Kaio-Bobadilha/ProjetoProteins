export default {
  name: 'vantagens',
  type: 'document',
  title: 'Vantagens',
  fields: [
       {
          name: 'descricao',
          type: 'string',
          title: 'Descrição da vantagem',
          description: 'Observacao sobre a vantagem'
        },
          {
            name: 'imagem',
            type: 'image',
            title: 'Imagem da vantagem',
            description: 'Imagem'
          }
    ]
};
