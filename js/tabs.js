const tabsHandlerElem = document.querySelectorAll('[data-tabs-handler]'); //кнопки
const tabsContentElem = document.querySelectorAll('[data-tabs-field]')
const tabsTitle = document.querySelectorAll('.design__title')

//design-list__item_active
// data-tabs-field

for(let btn of tabsHandlerElem){
  btn.addEventListener('click',() => {
// меняет класс и подчеркивание кнопок
    tabsHandlerElem.forEach((tabItem) => {
      tabItem.classList.remove('design-list__item_active')
    } )

    btn.classList.add('design-list__item_active')

// перебирает заголовки и меняет заголовок в зависимости от клика кнопки
  for(let x = 0;x < tabsTitle.length;x++){
  if(tabsTitle[x].dataset.tabsHandler === btn.dataset.tabsHandler){
    tabsTitle[x].classList.remove('hidden')
  } else {
    tabsTitle[x].classList.add('hidden')
  }

}

    // console.dir(btn);
    // console.log(btn.dataset.tabsHandler);

    // меняет контент
    tabsContentElem.forEach(contentItem => {
      // if(contentItem.dataset.tabsField === btn.dataset.tabsHandler) {
      //   contentItem.classList.remove('hidden')
      // } else {
      //    contentItem.classList.add('hidden')
      // }
      contentItem.dataset.tabsField === btn.dataset.tabsHandler ? contentItem.classList.remove('hidden'):contentItem.classList.add('hidden')

    })
  })

}