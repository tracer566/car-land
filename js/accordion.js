const btn = document.querySelector('.feature__link');
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

// btn.onclick = function(){
//  console.log('1')
// }

// btn.onclick = function(){
//  console.log('2')
// }

// btn.addEventListener('click',() => {console.log('1')})

// btn.addEventListener('click',() => {console.log('2')})

// btn.addEventListener('click',() => console.log('1'))

// for(let z = 0;z < btns.length;z++){
// btns[z].addEventListener('mouseleave',() => console.log(btns[z]))
// }

btns.forEach((btnItem,index)=>{
   btnItem.addEventListener('click',() => {
    btns.forEach((btnItem2,idx) => {
      // btnItem.classList.remove('feature__link_active')
      if(btnItem === btnItem2){
       btnItem.classList.toggle('feature__link_active')
       lists[idx].classList.toggle('hidden')
      } else {
        btnItem.classList.remove('feature__link_active')
        lists[idx].classList.add('hidden')
      }
    })

    // btnItem.classList.add('feature__link_active')

  
    // lists.forEach((listItem) => {
    //   listItem.classList.add('hidden')
    // })

    // lists[index].classList.remove('hidden')
   })

})