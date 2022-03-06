/* APARECER/DESAPARECER O MENU */

const nav = document.querySelector('nav')
const tgg = document.querySelectorAll('.toggle')

for(const element of tgg){
  element.addEventListener('click', e => {
    nav.classList.toggle('show')
  })
}

/* MENU DESAPARECE QUANDO UM LINK É CLICADO */

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', e => {
    nav.classList.remove('show')
  })
}

/* TODOS OS EVENTOS DE SCROLL */

window.addEventListener('scroll', e => [
  changeHeaderWhenScroll(),
  activeMenuAtCurrentSection(),
  backToTop()
])

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
  /* checkpoint -> divide a janela toda por 8 e pega metade dela. Ou seja, pega 4 partes dessas 8 em foi dividida: ((window.innerHeight / 8) * 4). Em seguida, soma com o tamanho do deslocamento da janela em relação ao eixo Y. */
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop =
      section.offsetTop /* pega o deslocamento do topo da seção */
    const sectionHeight =
      section.offsetHeight /* pega o deslocamento da altura da seção */
    const sectionId = section.getAttribute('id') /* pega o id da seção */

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      /* entre checkpointStart e checkpointEnd */
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

const backToTopBotton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopBotton.classList.add('show')
  } else {
    backToTopBotton.classList.remove('show')
  }
}

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700, //mili segundos
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .text .title, #aboult .text p, #gestalt-therapy .image, #gestalt-therapy .text, #online-service .image, #online-service .text, #personal-service .image, #personal-service .text, #acting .text, #acting .card, #professional-orientation .image, #professional-orientation .text, #contact header, #contact .informations, footer .brand, footer .icons`,
  {
    interval: 100
  }
)