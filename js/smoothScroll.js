const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')

const newArr = [...linksHead, mainScroll]

newArr.forEach(links => {
  links.addEventListener('click', (event) => {
    event.preventDefault()
    const ID = event.target.getAttribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })


  })
})