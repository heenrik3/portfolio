'use strict'

document.title = 'Portfolio - Henrique'

// document.querySelector('.theme__icon').addEventListener('click', themeSwitch)

function start() {
  const about__text = `me chamo luis henrique.\n sou graduando em análise e
  desenvolvimento de sistemas pela UEZO.
  \nsempre curioso sobre tecnologia,\n decidi mergulhar nesse mundo e,
   sinceramente, não poderia estar mais feliz!\n\n faço todo dia, um dia de adquirir um pouco mais
   de conhecimento porque eu acredito, que sabedoria é a chave fundamental no desenvolvimento humano,
   e pode nos revelar as verdades ocultas.\n\nme mantenho organizado, me desafio constantemente, defino pequenas metas e sempre
   tento fazer melhor do que ontem, pois sempre há a
   oportunidade de se melhorar e alcançar pontos\n anteriormente inalcançáveis.`

  document.querySelector('.about__text').innerText = about__text

  const extern = document.querySelectorAll('.extern')

  extern.forEach((item) => {
    item.addEventListener('click', clickHandler)
  })
}

function clickHandler() {
  const urls = {
    twitter: 'https://twitter.com/DevHenrik3',
    github: 'https://github.com/heenrik3',
    linkedin: 'https://www.linkedin.com/in/henrik3-dev/',
    vyag: 'https://vyag.vercel.app/',
    climacheca: 'https://climacheca.000webhostapp.com/',
  }

  window.open(`${urls[this.id]}`)
}

// function themeSwitch() {
//   if (this.classList.contains('fa-sun')) {
//     this.classList.remove('fa-sun')
//     this.classList.add('fa-moon')
//   } else {
//     this.classList.remove('fa-moon')
//     this.classList.add('fa-sun')
//   }
// }

start()
