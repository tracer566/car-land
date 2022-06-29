const modalBtn = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
// const closeBtn = document.querySelector('.modal__close');

for(let i = 0;i < modalBtn.length;i++){
  modalBtn[i].addEventListener('click',() => {
  modal.classList.remove('hidden')
})
}

modal.addEventListener('click',(e) => {
  if(e.target.classList.contains('overlay') || e.target.classList.contains('modal__close')){
    modal.classList.add('hidden')
  }

})

// closeBtn.onclick = function() {
//   modal.classList.add('hidden')
// }
