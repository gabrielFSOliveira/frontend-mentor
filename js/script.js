const cards = [
    {
        img: './imagens/desafios-imagens/3-column-preview-card-component-main.png',
        challenge: '3 Column Preview Card Component Main',
        page_link: 'https://gabrielfsoliveira.github.io/frontend-mentor/desafios/3-column-preview-card-component-main/',
        code_link: 'https://github.com/gabrielFSOliveira/frontend-mentor/tree/main/desafios/3-column-preview-card-component-main',
        level: 'newbie'
    },
    {
        img: 'imagens/desafios-imagens/single-price-grid-component-master.png',
        challenge: 'Single Price Grid Component Master',
        page_link: 'https://gabrielfsoliveira.github.io/frontend-mentor/desafios/single-price-grid-component-master/',
        code_link: 'https://github.com/gabrielFSOliveira/frontend-mentor/tree/main/desafios/single-price-grid-component-master',
        level: 'newbie'
    },
    {
        img: './imagens/desafios-imagens/order-summary-component-main.png',
        challenge: 'Order Summary Component',
        page_link: 'https://gabrielfsoliveira.github.io/frontend-mentor/desafios/order-summary-component-main/',
        code_link: 'https://github.com/gabrielFSOliveira/frontend-mentor/tree/main/desafios/order-summary-component-main/',
        level: 'newbie'
    },
    {
        img: './imagens/desafios-imagens/testimonials-grid-section-main.png',
        challenge: 'Testimonials Grid Section',
        page_link: 'https://gabrielfsoliveira.github.io/frontend-mentor/desafios/testimonials-grid-section-main/',
        code_link: 'https://github.com/gabrielFSOliveira/frontend-mentor/tree/main/desafios/testimonials-grid-section-main',
        level: 'junior'
    },
    {
        img: './imagens/desafios-imagens/nft-preview-card-component.png',
        challenge: 'NFT Preview Card Component',
        page_link: 'https://gabrielfsoliveira.github.io/frontend-mentor/desafios/nft-preview-card-component-main/',
        code_link: 'https://github.com/gabrielFSOliveira/frontend-mentor/tree/main/desafios/nft-preview-card-component-main',
        level: 'newbie'
    },
]

cards.map(card =>{
    const {img, challenge, page_link, code_link, level} = card
    
    const div_card = document.createElement('div')
    div_card.classList.add('card')

    div_card.innerHTML = `
    <div class="card-img">
    <img src="${img}" alt="Imagem da resolução do desafio ${challenge}">
    </div>
    <h3 class="card-title">${challenge}</h3>
    <div class="card-link card-page">
        <a href="${page_link}">Página</a>
    </div>
    <div class="card-link card-code">
        <a href="${code_link}">Código</a>
    </div>`

    if (level == 'newbie')
        document.querySelector('.newbie-div').appendChild(div_card)
    else if(level == 'junior')
        document.querySelector('.junior-div').appendChild(div_card)
})