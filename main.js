window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection() {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2
  //Verificar se a seção passou da linha
  const sectionTop = home.offsetTop //topo da seção home
  const sectionHeight = home.offsetHeight // Altura da Home
  const sectionTopReachOrTargetLine = targetLine >= sectionTop
  //fim da seção
  const sectionEndsAt = sectionTop + sectionHeight
  //Fim da seção passou da linha
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAtribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card,
#about,
#about header,
#about .content`)
