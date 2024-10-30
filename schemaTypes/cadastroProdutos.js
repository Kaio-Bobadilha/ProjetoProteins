// schemas/cadastroProdutos.js
export default{
    name: 'paginaInicial',
    type: 'document',
    title: 'Página inicial',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
        description: 'Título da seção "Sustentabilidade/Sobre Nós/Tenébrios Molitor"',
      },     
            {
                name: 'content',
                type: 'text',
                title: 'Conteúdo',
                description: 'Texto que resume a página',
            },
                {
                    name: 'imagem',
                    type: 'image',
                    title: 'Imagem',
                    description: 'Imagem relacionada com a página',
                },
        ]
}