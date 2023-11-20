const inputCase = document.querySelector('.case');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

//додаємо подію на кнопку
btn.addEventListener('click', () => {
  //ДОДАЄМО СПРАВУ
  //створюємо li
  const item = document.createElement('li');
  //об'єднуємо інпут з li щоб отримати доступ до того що пише юзер
  item.innerText = inputCase.value;
  //додаємо клас li
  item.classList.add('item');
  //прив'язуємо те що пише юзер до списку (ul)
  list.appendChild(item);
  //очищуємо інпут після додаваня li
  inputCase.value = '';


//ВИКРЕСЛЮЄМО СПРАВУ(1клік-закрелює, 2-видаляє)
item.addEventListener('click', () => {
  item.classList.add('removeCase');
})
item.addEventListener('dblclick', () => {
  list.removeChild(item);
})

})