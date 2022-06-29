const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const mainButton = document.querySelector('.main__button')
const newArray = [...linksHead,mainScroll,mainButton] //объединить массив и 1 элемент в один массив


newArray.forEach(link => {
  link.addEventListener('click',(e) => {
    e.preventDefault()
//substr(1) обрежет решетку в начале #contacts и друг якорей
    const ID = e.target.getAttribute('href').substr(1)
    
    // console.log(document.getElementById(ID))
    document.getElementById(ID).scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  })
})

