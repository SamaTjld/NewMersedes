const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())

menuElem.addEventListener('click', (event) => {
  const target = event.target.classList.contains('menu-list__link')
  if (target) {
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
  }
})