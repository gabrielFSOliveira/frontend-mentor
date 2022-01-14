import challenges from './challenges.json' assert { type: "json" }

const cards = challenges

cards.map(card => {
    const { img, challenge, page_link, code_link, level } = card

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
    else if (level == 'junior')
        document.querySelector('.junior-div').appendChild(div_card)
})