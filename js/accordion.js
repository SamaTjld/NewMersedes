const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll(".feature__link")

btns.forEach((btnsItem, index) => {
  btnsItem.addEventListener('click', () => {
    btns.forEach((btnsItem) => {
      btnsItem.classList.remove('feature__link_active')
    })
    btnsItem.classList.add('feature__link_active')

    lists.forEach((listItem) => {
      listItem.classList.add('hidden')
    })
    lists[index].classList.remove("hidden")
  })
})




