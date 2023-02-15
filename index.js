const mobileNavOpen = document.getElementById('navOpen')
const mobileNavClose = document.getElementById('navClose')

mobileNavOpen.addEventListener('click', () => {
  const mobileNav = document.getElementById('mobile-nav')

  mobileNav.classList.add('open')
})

mobileNavClose.addEventListener('click', () => {
  const mobileNav = document.getElementById('mobile-nav')

  mobileNav.classList.remove('open')
})

