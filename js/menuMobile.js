const hamburger = document.querySelector('.humburger-menu')
//humburger-menu-active
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu .menu-list li > a');


//решение 1 - мое
// hamburger.addEventListener('click',function(){
//   if(this.classList.contains('humburger-menu-active')){
//     menu.classList.remove('menu-active')
//      this.classList.remove('humburger-menu-active')
//   } else {
//     this.classList.add('humburger-menu-active')
//     menu.classList.add('menu-active')
//   }

// })

//решение 2
const toggleMenu = () => {
  hamburger.classList.toggle('humburger-menu-active')
  menu.classList.toggle('menu-active')
}

const removeMenu = () => {
  hamburger.classList.remove('humburger-menu-active')
  menu.classList.remove('menu-active')
}

hamburger.addEventListener('click',() => toggleMenu())

menuLinks.forEach(link => {
  link.addEventListener('click',removeMenu)
})