const form = document.querySelector('.form-test-drive')
const modalForm = document.querySelector('.modal__form')
const forms = [form,modalForm]

forms.forEach(form => {
form.addEventListener('submit',(event) => {
event.preventDefault()

// console.dir(form);

let data = {

}

for(let {name,value} of form.elements){
  console.log('value: ', value);
  if(name){
    data[name] = value
  }
}

fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'POST',
  body:JSON.stringify(data)
})
.then(response => {
  if(response.status === 200 || response.status === 201){
    return response.json()
  } else {
    throw new Error(response.status)
  }
})
.then(data2 => {
  alert('Данные успешно отправлены')
  form.reset()
})
.catch((error) => {
  // console.dir(error);
  alert('Произошел статус ' + error.message)
})

})
})




const logo = document.querySelector('.header__logo')
console.log(logo.getAttribute('title'));
logo.setAttribute('title','Вот и поменялся')
logo.setAttribute('href','https://ya.ru')
logo.setAttribute('target','_blank')

